import { ITEMS_RESULTS_TYPE } from "src/app/core/enums/items_result_type.enum";
import { OrdersState } from "src/app/core/interfaces/orders.interface";





export const ORDERS_STATES : OrdersState = {
   home_view_mode: 1,
   tables: [],
   active_table: {
      table: {
         id: 0,
         number: 0,
         seats: 0,
         isAvail: false,
         orderId: 0,
         waiterId: 0,
         waiterName: "",
         modified: ''
      },
      paymenttype: {
         name: '',
         id: 0
      },
      order_details: []
   },
   menu: [],
   active_menu_category: {
      id: 0,
      name: '',
      menu_categories_items: []
   },
   food_modal_visibility_status: false,
   selected_food_item: {
      id: 0,
      photo: "",
      name: "",
      description: "",
      price: 0,
      quantity: 1,
      total: 0,
      note: '',
      selected_options: [],
      menu_options_topics: []
   },
   search_results_type: ITEMS_RESULTS_TYPE.menu,
   searched_items: [],
   orders: [],
   active_order_details: {
      id: 0,
      taxes: 0,
      total: 0,
      sub_total: 0,
      table: {
         id: 0,
         number: 0,
         seats: 0,
         isAvail: false,
         waiterId: 0,
         waiterName: "",
         orderId: 0,
         modified: ''
      },
      paymenttype: {
         name: ''
      },
      order_details: []
   },
   searched_clients: [],
   restautant_data: {
      cover: '',
      id: 0,
      logo: '',
      name: '',
      taxes: 0,
      service: 0
   },
   cart: {
      cart_items: [],
      sub_total: 0,
      total: 0
   }
};