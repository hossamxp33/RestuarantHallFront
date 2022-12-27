import { ITEMS_RESULTS_TYPE } from "src/app/core/enums/items_result_type.enum";
import { OrdersState } from "src/app/core/interfaces/orders.interface";





export const ORDERS_STATES : OrdersState = {
   tables: [],
   active_order_table: {
      id: 0,
      number: 0,
      seats: 0
   },
   menu: [],
   active_menu_category: {
      id: 0,
      name: '',
      menu_categories_items: []
   },
   orders: [],
   search_results_type: ITEMS_RESULTS_TYPE.menu,
   searched_items: []
   
};