import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { CookieService } from "ngx-cookie-service";
import { tap } from "rxjs";
import { AppStates } from "src/app/core/interfaces/app.interface";
import { MenuItemInterface } from "src/app/core/interfaces/orders.interface";
import { GraphQLService } from "src/app/core/services/graphql.service";
import { OrdersService } from "src/app/core/services/orders.service";
import { GET_ALL_ORDERS_QUERY, GET_CLIENT_BY_PHONE_NUMBER_QUERY, GET_HALL_TABLE_QUERY, GET_MENU_QUERY, GET_RESTAURANT_DATA, GET_SINGLE_ORDER_DETAILS_QUERY, SEARCH_ITEMS_BY_NAME_QUERY } from "../graph/orders.query";
import { ADD_ITEM_TO_CART_ACTION, ADD_ORDER_BY_TABLE_ACTION, ALL_ORDERS_LOADED_ACTION, UPDATE_CART_TOTAL_ACTION, EDIT_ORDER_ACTION, GET_ORDER_DETAILS_ACTION, LOAD_ALL_ORDERS_ACTION, LOAD_ALL_TABLES_ACTION, LOAD_MENU_ACTION, MENU_LOADED_ACTION, SAVE_ACTIVE_ORDER_DATA_ACTION, SAVE_CLIENTS_RESULTS_ACTION, SAVE_ORDER_DETAILS_ACTION, SEARCHED_ITEM_COMPLETE_ACTION, SEARCHING_CLIENT_PHONE_NUMBER_ACTION, SEARCH_ITEM_BY_NAME_ACTION, SET_ACTIVE_TABLE_ACTION, TABLES_LOADED_ACTION, UPDATE_CART_SUB_TOTAL_ACTION, GET_RESTAURANT_DATA_ACTION, RESTAURANT_DATA_LOADED_ACTION, DELETE_CART_ITEM_ACTION, CHANGED_CART_ITEM_QUANTITY_ACTION, UPDATE_CART_ITEM_TOTAL_ACTION, GET_TABLE_ORDER_CART_ITEMS_ACTION } from "./orders.actions";






@Injectable({ providedIn: 'root' })
export class HallEffects implements OnInit
{



   //------------------------------------------------------------
   //    VARIABLES
   //------------------------------------------------------------

   cart_items: MenuItemInterface[] = [];
   cart_total: number = 0;

   //------------------------------------------------------------
   //    FUNCTIONS
   //------------------------------------------------------------

   constructor(
      private actions$: Actions,
      private query_s: GraphQLService,
      private store: Store<AppStates>,
      private orders_s: OrdersService,
      private router: Router,
      private cookie_s: CookieService
   ){}


   ngOnInit()
   {

      this.listen_to_cart();

   }


   listen_to_cart()
   {



   }


   //------------------------------------------------------------
   //    EFFECTS
   //------------------------------------------------------------
   loading_tables$ = createEffect(
      ()=>{
         return this.actions$.pipe(
            ofType(LOAD_ALL_TABLES_ACTION),
            tap(()=>{

               this.query_s.query(GET_HALL_TABLE_QUERY).subscribe(
                  (response : any)=>{
                    this.store.dispatch(TABLES_LOADED_ACTION( { tables: response.data.restables } ));
                  },
                  (err)=>{
                    console.error(err);
                  }
               );
              

            })
         );
      },
      { dispatch: false }
   );


   

   loading_menu$ = createEffect(
      ()=>{

         return this.actions$.pipe(
            ofType(LOAD_MENU_ACTION),
            tap(()=>{

               this.query_s.query(GET_MENU_QUERY).subscribe(
                  (response : any)=>{
         
                     this.store.dispatch(MENU_LOADED_ACTION({ menu: response.data.menuCategories }))
         
                  },
                  (err)=>{
                     console.error(err);
                  }
               );
         

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
   
               this.query_s.query(GET_ALL_ORDERS_QUERY(action.date)).subscribe(
                  (response : any)=>{
         
                     // call action
                     this.store.dispatch( ALL_ORDERS_LOADED_ACTION( { orders: response.data.orders } ) );
         
                  },
                  (err)=>{
                     console.error(err);
                  }
               );

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

               this.query_s.query(SEARCH_ITEMS_BY_NAME_QUERY(action.search_string)).subscribe(
                  (response: any)=>{
                     
                     this.store.dispatch(SEARCHED_ITEM_COMPLETE_ACTION( {searched_items: response.data.menuCategoriesItems} ));
         
                  },
                  (err)=>{
                     console.error(err);
                  }
               );

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

               this.query_s.query(GET_SINGLE_ORDER_DETAILS_QUERY(action.order_id)).subscribe(
                  (response: any)=>{
         
                     this.store.dispatch(SAVE_ORDER_DETAILS_ACTION({ order_details: response.data.orders[0] }));
         
                  },
                  (err)=>{
                     console.error(err);
                  }
               );

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
   
                  this.query_s.query(GET_CLIENT_BY_PHONE_NUMBER_QUERY(action.client_number)).subscribe(
                     (response: any)=>{
            
                        this.store.dispatch( SAVE_CLIENTS_RESULTS_ACTION({ clients: response.data.users }) )
                        
                     },
                     (err)=>{
                        console.error(err);
                     }
                  );
                  
               }
            )
         )
      },
      { dispatch: false }
   );


   edit_order$ = createEffect(
      ()=>{
         return this.actions$.pipe(
            ofType(EDIT_ORDER_ACTION),
            tap(
               (action)=>{
                  
                  this.orders_s.edit_order_by_id(action.order.order_id , action.order.order_details , action.order.order_total).subscribe(
                     (response : any)=>{
                        console.log("edit success! 💖" , "\n" , response);
                     },
                     (err)=>{
                        console.error(err);
                     }
                  );
                  
               }
            )
         );
      },
      { dispatch: false }
   );


   setting_active_table$ = createEffect(
      ()=>{

         return this.actions$.pipe(
            ofType(SET_ACTIVE_TABLE_ACTION),
            tap(
               (action)=>{

                  // check if the table is available/or not
                  if ( action.active_table.isAvail)
                  {
                     // table available, add order
                     this.store.dispatch( ADD_ORDER_BY_TABLE_ACTION({ table: action.active_table }) );
                  }
                  else
                  {
                     
                     // table not available, already have order, get order details(cart items of order) then redirect to menu
                     this.store.dispatch( GET_TABLE_ORDER_CART_ITEMS_ACTION() );
                     
                     
                     // redirect to menu view
                     this.router.navigateByUrl('/orders/menu');
                     
                  }


               }
            )
         );

      },
      { dispatch: false }
   );


   
   add_order$ = createEffect(
      ()=>{

         return this.actions$.pipe(
            ofType(ADD_ORDER_BY_TABLE_ACTION),
            tap((action)=>{

               this.orders_s.add_order_by_table(action.table).subscribe(
                  (response : any)=>{

                     this.store.dispatch(SAVE_ACTIVE_ORDER_DATA_ACTION({ reservation: response }))
         
                     // redirect to menu view
                     this.router.navigateByUrl('/orders/menu');
         
                  },
                  (err)=>{
                     console.error(err);
                  }
               );

            })
         );
         
      },
      { dispatch :false }
   );


   get_table_order_cart_items$ = createEffect(
      ()=>{

         return this.actions$.pipe( ofType(GET_TABLE_ORDER_CART_ITEMS_ACTION) , tap(
            ()=>{

               this.query_s.query(  );


            }
         ))

      },
      { dispatch: false }
   );

   
   loading_restaurant_data$ = createEffect(
      ()=>{
         return this.actions$.pipe(
            ofType(GET_RESTAURANT_DATA_ACTION),
            tap(()=>{
   
               if ( this.cookie_s.get("user") )
               {
                  this.query_s.query(GET_RESTAURANT_DATA).subscribe(
                     (response: any)=>{
   
                        this.store.dispatch(RESTAURANT_DATA_LOADED_ACTION( { restaurant_data: response.data.restaurants[0]} ));
   
                     },
                     (err)=>{
                        console.error(err);
                     }
                  );
               }
               
            })
         )
      },
      { dispatch: false }
   );



   adding_to_cart$ = createEffect(
      ()=>{

         return this.actions$.pipe(
            ofType(ADD_ITEM_TO_CART_ACTION),
            tap(
               ()=>{

                  // update sub-total for cart
                  this.store.dispatch( UPDATE_CART_SUB_TOTAL_ACTION() );

               }
            )
         );

      },
      { dispatch: false }
   );


   
   delete_item_from_cart$ = createEffect(
      ()=>{

         return this.actions$.pipe( ofType(DELETE_CART_ITEM_ACTION) , tap(

            ()=>{

               // update sub-total for cart
               this.store.dispatch( UPDATE_CART_SUB_TOTAL_ACTION() );

            }

         ));

      },
      { dispatch: false }
   );

   update_cart_item_quantity$ = createEffect(
      ()=>{
         
         return this.actions$.pipe( ofType(CHANGED_CART_ITEM_QUANTITY_ACTION) , tap(
            (action)=>{

               this.store.dispatch( UPDATE_CART_ITEM_TOTAL_ACTION({ item_id: action.order_id }) );

            }
         ));


      },
      { dispatch: false }
   );

   update_car_item_total$ = createEffect(
      ()=>{

         return this.actions$.pipe( ofType(UPDATE_CART_ITEM_TOTAL_ACTION) , tap(
            ()=>{

               // update sub-total for cart
               this.store.dispatch( UPDATE_CART_SUB_TOTAL_ACTION() );

            })
         )

      },
      { dispatch: false }
   );


   update_cart_total$ = createEffect(
      ()=>{

         return this.actions$.pipe(
            ofType(UPDATE_CART_SUB_TOTAL_ACTION),
            tap(
               ()=>{
                           
                  // update total for cart
                  this.store.dispatch( UPDATE_CART_TOTAL_ACTION() );

               }
            )
         );

      },
      { dispatch: false }
   );





}