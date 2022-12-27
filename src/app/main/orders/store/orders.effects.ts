import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { tap } from "rxjs";
import { TableInterface } from "src/app/core/interfaces/orders.interface";
import { GraphQLService } from "src/app/core/services/graphql.service";
import { OrdersService } from "src/app/core/services/orders.service";
import { GET_ALL_ORDERS_QUERY, GET_HALL_TABLE_QUERY, GET_MENU_QUERY } from "../graph/orders.query";
import { ADD_ORDER_BY_TABLE_ACTION, ALL_ORDERS_LOADED_ACTION, LOAD_ALL_ORDERS_ACTION, LOAD_ALL_TABLES_ACTION, LOAD_MENU_ACTION, MENU_LOADED_ACTION, TABLES_LOADED_ACTION } from "./orders.actions";






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



   // EFFECTS
   loading_tables = createEffect(
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


   add_order = createEffect(
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

   

   loading_menu = createEffect(
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



   load_orders_history = createEffect(
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





   // FUNCTIONS
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
            
            console.log("⭕ : " , response);

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
            console.log("💖 : " , response);

            this.store.dispatch(MENU_LOADED_ACTION({ menu: response.data.menuCategories }))

         },
         (err)=>{
            console.error(err);
         }
      );


   }



   load_all_orders(data : string)
   {

      console.log("🏎️ date: ", data);
      console.log("🏎️ query: ", GET_ALL_ORDERS_QUERY(data));

      this.query_s.query(GET_ALL_ORDERS_QUERY(data)).subscribe(
         (response : any)=>{

            // call action
            console.log("🤢 response: " , response);
            this.store.dispatch( ALL_ORDERS_LOADED_ACTION( { orders: response.data.orders } ) );

         },
         (err)=>{
            console.error(err);
         }
      );

   }


}