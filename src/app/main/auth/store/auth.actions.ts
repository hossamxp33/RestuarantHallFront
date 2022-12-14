import { createAction, props } from "@ngrx/store";
import { UserInterface } from "src/app/core/interfaces/auth.interface";




export const sign_in_action = createAction(
   "[auth/sign-in page] user signing-in",
   props<{ user : UserInterface }>()
);

export const sign_out_action = createAction(
   "[header/profile] signing user out"
); 

export const RESET_ALL_AUTH_STATE_ACTION = createAction(
   "[auth effects/sign-out] reset all auth state"
);