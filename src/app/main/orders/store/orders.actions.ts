import { createAction, props } from "@ngrx/store";
import { CartItemInterface, ClientInterface, EditOrderInterface, FullOrderDetailsInteface, MenuInterface, MenuItemInterface, OrderInterface, ReservationDataInterface, RestaurantDataInterface, TableInterface } from "src/app/core/interfaces/orders.interface";




export const LOAD_ALL_TABLES_ACTION = createAction(
   "[hall resolver] load all tables data"
);

export const TABLES_LOADED_ACTION = createAction(
   "[hall effect] tables data loaded",
   props<{ tables: TableInterface[] }>()
);

export const SET_ACTIVE_TABLE_ACTION = createAction(
   "[table controller] setting active table",
   props<{ active_table: TableInterface }>()
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

export const EDIT_ORDER_ACTION = createAction(
   "[hall controller] editing existing order",
   props<{ order: EditOrderInterface }>()
);

export const TOGGLE_FOOD_MODAL_ACTION = createAction(
   "[food modal controller] toggling modal visibility",
   props<{ visibility_status: boolean }>()
);

export const SET_ACTIVE_FOOD_ITEM_ACTION = createAction(
   "[food card controller] setting active food item",
   props<{ food_item: MenuItemInterface }>()
);

export const ADD_ITEM_TO_CART_ACTION = createAction(
   "[food modal controller] add item to cart",
   props<{ food_item: CartItemInterface }>()
);

export const DELETE_CART_ITEM_ACTION = createAction(
   "[card food cart controller] deleting cart item",
   props<{ item_id: number }>()
);

export const CHANGED_CART_ITEM_QUANTITY_ACTION = createAction(
   "[card food cart controller] changed cart item quantity",
   props<{ order_id: number , operation_type: "plus" | "minus" }>()
);

export const UPDATE_CART_SUB_TOTAL_ACTION = createAction(
   "[orders effect] update sub-total of cart"
);

export const UPDATE_CART_TOTAL_ACTION = createAction(
   "[orders effect]  update total of cart"
);

export const GET_RESTAURANT_DATA_ACTION = createAction(
   "[app controller] get restaurant data"
);

export const RESTAURANT_DATA_LOADED_ACTION = createAction(
   "[orders effects] saving restaurant data",
   props<{ restaurant_data: RestaurantDataInterface }>()
);

export const UPDATE_CART_ITEM_TOTAL_ACTION = createAction(
   "[orders effect] updating cart single item total",
   props<{ item_id: number }>()
);

export const RESET_ALL_ORDER_STATE_ACTION = createAction(
   "[auth effect/sign-out] reset all orders state"
);

export const GET_TABLE_ORDER_CART_ITEMS_ACTION = createAction(
   "[orders effects] getting table order cart items",
   props<{ order_id: number }>()
);

export const SET_TABLE_ORDER_CART_ITEMS_ACTION = createAction(
   "[orders effects] save table order cart items",
   props<{ order_details: CartItemInterface[] }>()
); 