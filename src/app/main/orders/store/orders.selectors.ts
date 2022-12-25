import { createSelector } from "@ngrx/store";
import { AppStates } from "src/app/core/interfaces/app.interface";
import { OrdersState } from "src/app/core/interfaces/orders.interface";






export const TABLES_SELECTOR = createSelector(
   (app_state : AppStates )=> app_state.orders,
   (state : OrdersState)=> state.tables
);