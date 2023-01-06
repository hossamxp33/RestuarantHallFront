import { createSelector } from "@ngrx/store";
import { AppStates } from "src/app/core/interfaces/app.interface";
import { AuthState } from "src/app/core/interfaces/auth.interface";






export const USER_SELECTOR = createSelector( 
   (app_state : AppStates)=>app_state.auth, 
   (data : AuthState)=> data.user
);


