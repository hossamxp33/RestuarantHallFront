import { createAction, props } from "@ngrx/store";
import { RestaurantDataInterface, UserInterface } from "src/app/core/interfaces/auth.interface";




export const sign_in_action = createAction(
   "[auth/sign-in page] user signing-in",
   props<{ user : UserInterface }>()
);


export const sign_out_action = createAction(
   "[header/profile] signing user out"
); 


export const GET_RESTAURANT_DATA_ACTION = createAction(
   "[app controller] get restaurant data"
);


export const RESTAURANT_DATA_LOADED_ACTION = createAction(
   "[auth effects] saving restaurant data",
   props<{ restaurant_data: RestaurantDataInterface }>()
);