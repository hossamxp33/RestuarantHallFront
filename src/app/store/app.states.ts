import { routerReducer } from "@ngrx/router-store";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { Auth_REDUCER } from "../main/auth/store/auth.reducers";





export const STORE_STATES : ActionReducerMap<any> = {
   router: routerReducer,   // ngrx time-travel debugger state
   auth : Auth_REDUCER,



};



export const META_REDUCERS : MetaReducer<any>[] = !environment.production ? [] : [];