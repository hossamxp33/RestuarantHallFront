
import { createReducer, on } from "@ngrx/store";
import { RESTAURANT_DATA_LOADED_ACTION, sign_in_action, sign_out_action } from "./auth.actions";
import { Auth_STATES } from "./auth.init";





// reducers
export const Auth_REDUCER = createReducer(
   Auth_STATES,
   on(
      sign_in_action, 
      (state, action)=>{
         
         return {
            ...state,
            user: {
               BranchId : action.user.BranchId,
               token : action.user.token,
               vendorId : action.user.vendorId
            } 
         };
      }
   ),
   on(
      sign_out_action,
      (state , action)=>{

         return {
            ...state,
            user: {
               BranchId: '',
               token: '',
               vendorId: ''
            }
         };

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
   )
   
);
