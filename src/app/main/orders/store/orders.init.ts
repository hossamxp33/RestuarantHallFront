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
   searched_items: [],
   active_order_details: {
      id: 0,
      taxes: 0,
      total: 0,
      sub_total: 0,
      table: {
         id: 0,
         number: 0,
         seats: 0
      },
      paymenttype: {
         name: ''
      },
      order_details: []
   },
   reservation: {
      table_id: 0,
      waiter_id: 0,
      created_by: 0,
      id: 0
   },
   home_view_mode: 1,
   searched_clients: []
};