import { createAction, props } from "@ngrx/store";
import { TableInterface } from "src/app/core/interfaces/orders.interface";




export const LOAD_ALL_TABLES_ACTION = createAction(
   "[hall resolver] load all tables data"
);



export const TABLES_LOADED_ACTION = createAction(
   "[hall effect] tables data loaded",
   props<{ tables: TableInterface[] }>()
);