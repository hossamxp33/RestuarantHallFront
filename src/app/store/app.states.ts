import { routerReducer } from "@ngrx/router-store";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { AppStates } from "../core/interfaces/app.interface";
import { Auth_REDUCER } from "../main/auth/store/auth.reducers";
import { ORDERS_REDUCERS } from "../main/orders/store/orders.reducers";





export const STORE_STATES : ActionReducerMap<AppStates> = {
   router: routerReducer,   // ngrx time-travel debugger state
   auth: Auth_REDUCER,
   orders: ORDERS_REDUCERS


};



export const META_REDUCERS : MetaReducer<any>[] = !environment.production ? [] : [];