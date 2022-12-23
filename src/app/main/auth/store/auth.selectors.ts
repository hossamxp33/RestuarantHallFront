import { createSelector } from "@ngrx/store";






export const AUTH_SELECTORS = createSelector( 
   (app_state : any)=>app_state.auth.user , 
   (data)=>{ return data; }
);