

import { createReducer, on, Store } from "@ngrx/store";
import { CartItemInterface, MenuItemInterface, OrdersState } from "src/app/core/interfaces/orders.interface";
import { ADD_ITEM_TO_CART_ACTION, ALL_ORDERS_LOADED_ACTION, CHANGED_CART_ITEM_QUANTITY_ACTION, DELETE_CART_ITEM_ACTION, MENU_LOADED_ACTION, RESET_ALL_ORDER_STATE_ACTION, RESTAURANT_DATA_LOADED_ACTION, SAVE_ACTIVE_ORDER_DATA_ACTION, SAVE_CLIENTS_RESULTS_ACTION, SAVE_ORDER_DETAILS_ACTION, SEARCHED_ITEM_COMPLETE_ACTION, SET_ACTIVE_CATEGORY_ACTION, SET_ACTIVE_FOOD_ITEM_ACTION, SET_ACTIVE_TABLE_ACTION, SET_HOME_VIEW_MODE_ACTION, SET_SEARCH_RESULTS_TYPE_ACTION, TABLES_LOADED_ACTION, TOGGLE_FOOD_MODAL_ACTION, UPDATE_CART_ITEM_TOTAL_ACTION, UPDATE_CART_SUB_TOTAL_ACTION, UPDATE_CART_TOTAL_ACTION } from "./orders.actions";
import { ORDERS_STATES } from "./orders.init";





export const ORDERS_REDUCERS = createReducer(
   ORDERS_STATES,
   on(
      TABLES_LOADED_ACTION,
      (state , action)=>{
         
         let new_state: OrdersState = {
            ...state,
            tables: action.tables
         };
         
         return new_state;
      }  
   ),
   on(
      MENU_LOADED_ACTION,
      (state , action)=>{

         let new_state: OrdersState = {
            ...state,
            menu: action.menu
         };


         return new_state;
      }
   ),
   on(
      SET_ACTIVE_CATEGORY_ACTION,
      (state , action)=>{

         let new_state: OrdersState = {
            ...state,
            active_menu_category: action.active_category
         };


         return new_state;
      }
   ),
   on(
      ALL_ORDERS_LOADED_ACTION,
      (state, action)=>{

         let new_state: OrdersState ={
            ...state,
            orders: action.orders
         };


         return new_state;
      }
   ),
   on(
      SEARCHED_ITEM_COMPLETE_ACTION,
      (state, action)=>{

         let new_state: OrdersState = {
            ...state,
            searched_items: action.searched_items
         };


         return new_state;
      }
   ),
   on(
      SET_SEARCH_RESULTS_TYPE_ACTION,
      (state, action)=>{

         let new_state: OrdersState = {
            ...state,
            search_results_type: action.search_results_type
         };


         return new_state;
      }
   ),
   on(
      SAVE_ORDER_DETAILS_ACTION,
      (state, action)=>{

         let new_state: OrdersState = {
            ...state,
            active_order_details: action.order_details
         };

         return new_state;
      }
   ),
   on(
      SAVE_ACTIVE_ORDER_DATA_ACTION,
      (state, action)=>{

         let new_state: OrdersState = {
            ...state,
            active_table: {
               ...state.active_table,
               table: {
                  ...state.active_table.table,
                  orderId: action.reservation.id,
                  waiterId: action.reservation.waiter_id,
                  isAvail: false
               }
            }
         };


         return new_state;
      }
   ),
   on(
      SET_HOME_VIEW_MODE_ACTION,
      (state, action)=>{

         let new_state: OrdersState = {
            ...state,
            home_view_mode: action.home_view_mode
         };


         return new_state;
      }
   ),
   on(
      SAVE_CLIENTS_RESULTS_ACTION,
      (state, action)=>{

         let new_state: OrdersState = {
            ...state,
            searched_clients: action.clients
         };

         return new_state;
      }
   ),
   on(
      SET_ACTIVE_TABLE_ACTION,
      (state, action)=>{

         let new_state: OrdersState = {
            ...state,
            active_table: {
               table: action.active_table,
               paymenttype: state.active_table.paymenttype,
               order_details: state.active_table.order_details
            }
         };

         return new_state;
         
      }
   ),
   on(
      TOGGLE_FOOD_MODAL_ACTION,
      (state, action)=>{

         let new_state: OrdersState = {
            ...state,
            food_modal_visibility_status: action.visibility_status
         };

         return new_state;
      }
   ),
   on(
      SET_ACTIVE_FOOD_ITEM_ACTION,
      (state, action)=>{

         let new_state: OrdersState = {
            ...state,
            selected_food_item: action.food_item
         };

         return new_state;
      }
   ),
   on(
      RESTAURANT_DATA_LOADED_ACTION,
      (state , action)=>{
         
         let new_state = { 
            ...state,
            restautant_data: action.restaurant_data
         };

         return new_state;
      }
   ),
   on(
      ADD_ITEM_TO_CART_ACTION,
      (state, action)=>{

         let new_state: OrdersState = {
            ...state,
            cart: {
               ...state.cart,
               cart_items: [
                  ...state.cart.cart_items, 
                  action.food_item
               ]
            }
         };


         return new_state;
      }
   ),
   on(
      DELETE_CART_ITEM_ACTION,
      (state, action)=>{


         // find item to delete
         let new_cart_items = state.cart.cart_items.filter(
            (item)=>{
               return item.id != action.item_id;
            }
         );


         let new_state: OrdersState = {
            ...state,
             cart: {
               ...state.cart,
               cart_items: new_cart_items
             }
         };

         return new_state;
      }
   ),
   on(
      CHANGED_CART_ITEM_QUANTITY_ACTION,
      (state, action)=>{

         let temp_1: CartItemInterface[]  = [ ...state.cart.cart_items ];
         let temp_2: CartItemInterface[] = [];
         let new_cart_items: CartItemInterface[] = [];
         
         
         temp_2 = temp_1.map((item)=>{
            return { ...item };
         });

         new_cart_items = temp_2.map(
            (item)=>{

               if ( item.id == action.order_id )
               {

                  if ( action.operation_type == "plus" )
                  {
                     item.quantity = item.quantity + 1;
                  }
                  else   // decrease one
                  {
                     item.quantity = item.quantity > 1 ? (item.quantity - 1) : item.quantity;
                  }

               }

               return item;

            }
         );

         let new_state: OrdersState = {
            ...state,
            cart: {
               ...state.cart,
               cart_items: new_cart_items
            }
         };

         return new_state;
      }
   ),
   on(
      UPDATE_CART_ITEM_TOTAL_ACTION,
      (state, action)=>{

         // // get options price for single meal
         // this.extra_price = 0 ;
         // this.new_food_data.selected_options.forEach((el : any)=>{ this.extra_price+= el.price; });
         
         // // calculate total price
         // this.new_food_data.total = +( (this.new_food_data.price  + this.extra_price) * this.new_food_data.quantity ).toFixed(2);


         
         let temp_1: CartItemInterface[]  = [ ...state.cart.cart_items ];
         let temp_2: CartItemInterface[] = [];
         let new_cart_items: CartItemInterface[] = [];
         
         
         temp_2 = temp_1.map((item)=>{
            return { ...item };
         });

         new_cart_items = temp_2.map(
            (item)=>{

               if ( item.id == action.item_id )
               {

                  let new_total = 0;
                  let extra_price = 0 ;

                  item.selected_options.forEach(
                     (option)=>{
                        extra_price += option.price;
                     }
                  );
                  
                  new_total = ( item.price + extra_price ) * item.quantity;

                  item.total = new_total;

               }

               return item;

            }
         );

         let new_state = { 
            ...state,
            cart: {
               ...state.cart,
               cart_items: new_cart_items
            }
         
         };


         return new_state;

      }
   ),
   on(
      UPDATE_CART_SUB_TOTAL_ACTION,
      (state, action)=>{


         let new_sub_total = 0;

         let temp = { ...state };

         temp.cart.cart_items.forEach(
            (item)=>{
               new_sub_total += item.total;
            }
         );


         let new_state = {
            ...state,
            cart: {
               ...state.cart,
               sub_total: new_sub_total
            }
         };


         return new_state;

      }
   ),
   on(
      UPDATE_CART_TOTAL_ACTION,
      (state, action)=>{

         let new_total = 0;

         if ( state.cart.sub_total != 0 )
         {
            new_total = state.cart.sub_total + state.restautant_data.taxes + state.restautant_data.service;
         }
         else
         {
            new_total = 0;
         }


         let new_state = {
            ...state,
            cart: {
               ...state.cart,
               total: new_total
            }
         };

      
         return new_state;

      }
   ),
   on(
      RESET_ALL_ORDER_STATE_ACTION,
      (state, action)=>{

         let new_state = {
            ...state,
            ...ORDERS_STATES
         };

         return new_state;
      }
   )
);