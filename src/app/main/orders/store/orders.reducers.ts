import { createReducer, on } from "@ngrx/store";
import { OrdersState } from "src/app/core/interfaces/orders.interface";
import { ADD_ORDER_BY_TABLE_ACTION, ALL_ORDERS_LOADED_ACTION, MENU_LOADED_ACTION, SEARCHED_ITEM_COMPLETE_ACTION, SET_ACTIVE_CATEGORY_ACTION, SET_SEARCH_RESULTS_TYPE_ACTION, TABLES_LOADED_ACTION } from "./orders.actions";
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
      ADD_ORDER_BY_TABLE_ACTION,
      (state , action)=>{

         let new_state: OrdersState = {
            ...state,
            active_order_table: action.table
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
   )
);