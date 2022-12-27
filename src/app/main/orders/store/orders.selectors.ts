import { createSelector } from "@ngrx/store";
import { AppStates } from "src/app/core/interfaces/app.interface";
import { OrdersState } from "src/app/core/interfaces/orders.interface";






export const TABLES_SELECTOR = createSelector(
   (app_state : AppStates )=> app_state.orders,
   (state : OrdersState)=> state.tables
);



export const MENU_SELECTOR = createSelector(
   (app_state: AppStates)=> app_state.orders,
   (orders_state: OrdersState)=> orders_state.menu
);


export const ACTIVE_CATEGORY_SELECTOR = createSelector(
   (app_state: AppStates)=> app_state.orders,
   (orders_states: OrdersState)=> orders_states.active_menu_category
);


export const ALL_ORDERS_STATE = createSelector(
   (app_state: AppStates)=> app_state.orders,
   (orders_state: OrdersState)=> orders_state.orders
);