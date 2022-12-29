import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { tap } from "rxjs";
import { ClientInterface, TableInterface } from "src/app/core/interfaces/orders.interface";
import { GraphQLService } from "src/app/core/services/graphql.service";
import { OrdersService } from "src/app/core/services/orders.service";
import { GET_ALL_ORDERS_QUERY, GET_CLIENT_BY_PHONE_NUMBER_QUERY, GET_HALL_TABLE_QUERY, GET_MENU_QUERY, GET_SINGLE_ORDER_DETAILS_QUERY, SEARCH_ITEMS_BY_NAME_QUERY } from "../graph/orders.query";
import { ADD_ORDER_BY_TABLE_ACTION, ALL_ORDERS_LOADED_ACTION, GET_ORDER_DETAILS_ACTION, LOAD_ALL_ORDERS_ACTION, LOAD_ALL_TABLES_ACTION, LOAD_MENU_ACTION, MENU_LOADED_ACTION, SAVE_ACTIVE_ORDER_DATA_ACTION, SAVE_CLIENTS_RESULTS_ACTION, SAVE_ORDER_DETAILS_ACTION, SEARCHED_ITEM_COMPLETE_ACTION, SEARCHING_CLIENT_PHONE_NUMBER_ACTION, SEARCH_ITEM_BY_NAME_ACTION, TABLES_LOADED_ACTION } from "./orders.actions";






@Injectable({ providedIn: 'root' })
export class HallEffects
{



   constructor(
      private actions$: Actions,
      private query_s: GraphQLService,
      private store: Store,
      private orders_s: OrdersService,
      private router: Router
   ){}




   //------------------------------------------------------------
   //    EFFECTS
   //------------------------------------------------------------
   loading_tables$ = createEffect(
      ()=>{
         return this.actions$.pipe(
            ofType(LOAD_ALL_TABLES_ACTION),
            tap(()=>{

               this.get_hall_tables_from_apollo();

            })
         );
      },
      { dispatch: false }
   );


   add_order$ = createEffect(
      ()=>{

         return this.actions$.pipe(
            ofType(ADD_ORDER_BY_TABLE_ACTION),
            tap((action)=>{

               this.add_order_by_table(action.table);

            })
         );
         
      },
      { dispatch :false }
   );

   

   loading_menu$ = createEffect(
      ()=>{

         return this.actions$.pipe(
            ofType(LOAD_MENU_ACTION),
            tap(()=>{

               this.load_menu();

            })
         );

      },
      { dispatch: false }
   );



   load_orders_history$ = createEffect(
      ()=>{
         return this.actions$.pipe(
            ofType(LOAD_ALL_ORDERS_ACTION),
            tap((action)=>{
   
               this.load_all_orders(action.date);

            })
         )
      },
      { dispatch: false }
   );


   searching_items$ = createEffect(
      ()=>{

         return this.actions$.pipe(
            ofType(SEARCH_ITEM_BY_NAME_ACTION),
            tap((action)=>{

               this.searching_for_items(action.search_string);

            })
         )


      },
      { dispatch: false }
   );



   get_order_details$ = createEffect(
      ()=>{

         return this.actions$.pipe(
            ofType(GET_ORDER_DETAILS_ACTION),
            tap((action)=>{

               this.getting_order_details(action.order_id);

            })
         );

      },
      { dispatch: false }
   );


      search_client_number$ = createEffect(
         ()=>{
            return this.actions$.pipe(
               ofType( SEARCHING_CLIENT_PHONE_NUMBER_ACTION ),
               tap(
                  (action)=>{
      
                     this.searching_client_number(action.client_number);
                     
                  }
               )
            )
         },
         { dispatch: false }
      );





   //------------------------------------------------------------
   //    FUNCTIONS
   //------------------------------------------------------------
   get_hall_tables_from_apollo()
   {
     
     this.query_s.query(GET_HALL_TABLE_QUERY).subscribe(
       (response : any)=>{
         this.store.dispatch(TABLES_LOADED_ACTION( { tables: response.data.restables } ));
       },
       (err)=>{
         console.error(err);
       }
     );
   
   }



   add_order_by_table(table: TableInterface)
   {

      this.orders_s.add_order_by_table(table).subscribe(
         (response : any)=>{
            
            this.store.dispatch(SAVE_ACTIVE_ORDER_DATA_ACTION({ reservation: response }))

            // redirect to menu view
            this.router.navigateByUrl('/orders/menu');

         },
         (err)=>{
            console.error(err);
         }
      );

   }



   load_menu()
   {

      this.query_s.query(GET_MENU_QUERY).subscribe(
         (response : any)=>{

            this.store.dispatch(MENU_LOADED_ACTION({ menu: response.data.menuCategories }))

         },
         (err)=>{
            console.error(err);
         }
      );


   }



   load_all_orders(data : string)
   {

      this.query_s.query(GET_ALL_ORDERS_QUERY(data)).subscribe(
         (response : any)=>{

            // call action
            this.store.dispatch( ALL_ORDERS_LOADED_ACTION( { orders: response.data.orders } ) );

         },
         (err)=>{
            console.error(err);
         }
      );

   }
   



   searching_for_items(string_to_search : string)
   {

      this.query_s.query(SEARCH_ITEMS_BY_NAME_QUERY(string_to_search)).subscribe(
         (response: any)=>{
            
            this.store.dispatch(SEARCHED_ITEM_COMPLETE_ACTION( {searched_items: response.data.menuCategoriesItems} ));

         },
         (err)=>{
            console.error(err);
         }
      );


   }



   getting_order_details(order_id : number)
   {

      this.query_s.query(GET_SINGLE_ORDER_DETAILS_QUERY(order_id)).subscribe(
         (response: any)=>{

            this.store.dispatch(SAVE_ORDER_DETAILS_ACTION({ order_details: response.data.orders[0] }));

         },
         (err)=>{
            console.error(err);
         }
      );

   }



   searching_client_number(client_number: string)
   {

      this.query_s.query(GET_CLIENT_BY_PHONE_NUMBER_QUERY(client_number)).subscribe(
         (response: any)=>{

            this.store.dispatch( SAVE_CLIENTS_RESULTS_ACTION({ clients: response.data.users }) )
            
         },
         (err)=>{
            console.error(err);
         }
      );

   }


}