import { createReducer, on } from "@ngrx/store";
import { ADD_ORDER_BY_TABLE_ACTION, MENU_LOADED_ACTION, SET_ACTIVE_CATEGORY_ACTION, TABLES_LOADED_ACTION } from "./orders.actions";
import { ORDERS_STATES } from "./orders.init";





export const ORDERS_REDUCERS = createReducer(
   ORDERS_STATES,
   on(
      TABLES_LOADED_ACTION,
      (state , action)=>{
         
         let new_state = {
            ...state,
            tables: action.tables
         };
         
         return new_state;
      }  
   ),
   on(
      ADD_ORDER_BY_TABLE_ACTION,
      (state , action)=>{

         let new_state = {
            ...state,
            active_order_table: action.table
         };

         return new_state;
      }
   ),
   on(
      MENU_LOADED_ACTION,
      (state , action)=>{

         let new_state = {
            ...state,
            menu: action.menu
         };


         return new_state;
      }
   ),
   on(
      SET_ACTIVE_CATEGORY_ACTION,
      (state , action)=>{

         let new_state = {
            ...state,
            active_menu_category: action.active_category
         };


         return new_state;
      }
   )
);