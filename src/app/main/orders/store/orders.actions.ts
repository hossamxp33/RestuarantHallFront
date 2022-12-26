import { createAction, props } from "@ngrx/store";
import { MenuInterface, TableInterface } from "src/app/core/interfaces/orders.interface";




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