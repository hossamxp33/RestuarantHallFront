import { createSelector } from "@ngrx/store";
import { AppStates } from "src/app/core/interfaces/app.interface";
import { ActiveTableInterface, OrdersState } from "src/app/core/interfaces/orders.interface";






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


export const GET_ACTIVE_TABLE_SELECTOR = createSelector(
   (app_state: AppStates)=> app_state.orders,
   (orders_state: OrdersState)=> orders_state.active_table
);

export const GET_HOME_STATE_MODE_SELECTOR = createSelector(
   (app_state: AppStates)=> app_state.orders,
   (orders_state: OrdersState)=> orders_state.home_view_mode
);

export const GET_CLIENTS_RESULTS_SELECTOR = createSelector(
   (app_state: AppStates)=> app_state.orders,
   (orders_state: OrdersState)=> orders_state.searched_clients
);

export const GET_FOOD_MODAL_VISIBILITY_STATUS_SELECTOR = createSelector(
   (app_states: AppStates)=> app_states.orders,
   (order_states: OrdersState)=> order_states.food_modal_visibility_status
);

export const GET_SELECTED_FOOD_ITEM = createSelector(
   (app_states: AppStates)=> app_states.orders,
   (orders_state: OrdersState)=> orders_state.selected_food_item
);

export const GET_CART_ITEMS_SELECTOR = createSelector(
   (app_states: AppStates)=> app_states.orders,
   (orders_states: OrdersState)=> orders_states.cart
);

export const RESTAURANT_DATA_SELECTOR = createSelector(
   (app_state: AppStates)=> app_state.orders,
   (orders_state: OrdersState)=> orders_state.restautant_data
);