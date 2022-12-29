import { createAction, props } from "@ngrx/store";
import { ClientInterface, FullOrderDetailsInteface, MenuInterface, MenuItemInterface, OrderInterface, ReservationDataInterface, TableInterface } from "src/app/core/interfaces/orders.interface";




export const LOAD_ALL_TABLES_ACTION = createAction(
   "[hall resolver] load all tables data"
);



export const TABLES_LOADED_ACTION = createAction(
   "[hall effect] tables data loaded",
   props<{ tables: TableInterface[] }>()
);



export const ADD_ORDER_BY_TABLE_ACTION = createAction(
   "[table controller] add order to table",
   props<{ table: TableInterface }>()
);


export const LOAD_MENU_ACTION = createAction(
   "[menu resolve] load menu"
);


export const MENU_LOADED_ACTION = createAction(
   "[orders effects] loading menu",
   props<{ menu : MenuInterface[] }>()
);


export const SET_ACTIVE_CATEGORY_ACTION = createAction(
   "[menu controller] setting active category",
   props<{ active_category: MenuInterface }>()
);


export const LOAD_ALL_ORDERS_ACTION = createAction(
   "[orders all page resolver] load orders history",
   props<{ date: string }>()
);



export const ALL_ORDERS_LOADED_ACTION = createAction(
   "[orders effects] save all orders",
   props<{ orders: OrderInterface[] }>()
);


export const SEARCH_ITEM_BY_NAME_ACTION = createAction(
   "[orders controller] searchig items",
   props<{ search_string: string }>()
);


export const SEARCHED_ITEM_COMPLETE_ACTION = createAction(
   "[orders effects] save searched items",
   props<{ searched_items: MenuItemInterface[] }>()
);


export const SET_SEARCH_RESULTS_TYPE_ACTION = createAction(
   "[orders controller] set search results type",
   props<{ search_results_type: number }>()
);


export const GET_ORDER_DETAILS_ACTION = createAction(
   "[orders all page] getting order dertails",
   props<{ order_id: number }>()
);


export const SAVE_ORDER_DETAILS_ACTION = createAction(
   "[orders effects] save acttive order details",
   props<{ order_details: FullOrderDetailsInteface }>()
);

export const SAVE_ACTIVE_ORDER_DATA_ACTION = createAction(
   "[orders effects] save active reservation",
   props<{ reservation: ReservationDataInterface }>()
);

export const SET_HOME_VIEW_MODE_ACTION = createAction(
   "[hall controller] setting home view mode",
   props<{ home_view_mode: number }>()
);

export const SEARCHING_CLIENT_PHONE_NUMBER_ACTION = createAction(
   "[delievery section controller] searching client number",
   props<{ client_number: string }>()
);

export const SAVE_CLIENTS_RESULTS_ACTION = createAction(
   "[orders effects] saving clients results",
   props<{ clients: ClientInterface[] }>()
);