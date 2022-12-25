import { createReducer, on } from "@ngrx/store";
import { TABLES_LOADED_ACTION } from "./orders.actions";
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
   )
);