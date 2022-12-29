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


export const SEARCHED_ITEMS_SELECTOR = createSelector(
   (app_state: AppStates)=> app_state.orders,
   (order_state: OrdersState)=> order_state.searched_items
);


export const ITEMS_RESULTS_TYPE_SELECTOR = createSelector(
   (app_state: AppStates)=> app_state.orders,
   (orders_state: OrdersState)=> orders_state.search_results_type
);


export const ACTIVE_ORDER_DETAILS_SELECTOR = createSelector(
   (app_state: AppStates)=> app_state.orders,
   (orders_state: OrdersState)=> orders_state.active_order_details 
);

export const GET_ACTIVE_RESERVATION_SELECTOR = createSelector(
   (app_state: AppStates)=> app_state.orders,
   (orders_state)=> orders_state.reservation
);

export const GET_ACTIVE_ORDER_SELECTOR = createSelector(
   (app_state: AppStates)=> app_state.orders,
   (orders_state: OrdersState)=> orders_state.active_order_table
);

export const GET_HOME_STATE_MODE_SELECTOR = createSelector(
   (app_state: AppStates)=> app_state.orders,
   (orders_state: OrdersState)=> orders_state.home_view_mode
);

export const GET_CLIENTS_RESULTS_SELECTOR = createSelector(
   (app_state: AppStates)=> app_state.orders,
   (orders_state: OrdersState)=> orders_state.searched_clients
);