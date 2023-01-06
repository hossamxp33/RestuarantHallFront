



export interface OrdersState
{
   tables: TableInterface[],
   active_table: ActiveTableInterface,
   selected_food_item: MenuItemInterface,
   food_modal_visibility_status: boolean,
   menu: MenuInterface[],
   active_menu_category: MenuInterface,
   orders: OrderInterface[],
   search_results_type: number,
   searched_items: MenuItemInterface[],
   active_order_details: FullOrderDetailsInteface,
   home_view_mode: number,
   searched_clients: ClientInterface[],
   restautant_data: RestaurantDataInterface,
   cart: CartInterface
}


export interface TableInterface
{
   id: number,
   number: number,
   seats: number,
   isAvail: boolean,
   waiterId: number
   waiterName: string,
   orderId: number,
   modified: string
}


export interface MenuInterface
{
   id: number,
   name: string,
   menu_categories_items: MenuItemInterface[]
}



export interface MenuItemInterface
{
   id: number,
   name: string,
   photo: string,
   price: number,
   description: string,
   quantity: number,
   total: number,
   note: string,
   selected_options: MenuItemTopicsOptionsInterface[],
   menu_options_topics: MenuItemTopicsInterface[]
}


export interface MenuItemTopicsInterface
{
   name: string,
   required: number,
   max_option_checks: number,
   menu_options: MenuItemTopicsOptionsInterface[]
}

export interface MenuItemTopicsOptionsInterface
{
   id: number,
   name: string,
   price: number,
   menu_options_topics_id: number
}


export interface OrderInterface
{
   id: number,
   table: TableInterface,
   total: number
}


export interface PaymentTypeInterface
{
   name: string,
   id?:number
}


export interface menuCategoriesItemsInterface
{
   photo: string,
   name: string
}

export interface OrderDetailsInterface
{
   amount: number,
   total: number,
   menu_categories_items: menuCategoriesItemsInterface
}

export interface FullOrderDetailsInteface
{
   id: number,
   taxes: number,
   total: number,
   sub_total: number,
   table: TableInterface,
   paymenttype: PaymentTypeInterface,
   order_details: OrderDetailsInterface[]
}


export interface ReservationDataInterface
{
   table_id: number,
   waiter_id: number,
   created_by: number,
   id: number
}


export interface ClientInterface
{
   id: number,
   username: string,
   mobile: string,
   address: string
}


export interface CartOrdersInterface
{
   amount: number,
   sub_total: number,
   menu_categories_itemId: number,
   notes: string,
   order_details_options: CartOrderItemInterface[],
   total: number
}


export interface CartOrderItemInterface
{
   menu_options_id: number
}


export interface EditOrderInterface
{   
   order_id: number,
   order_details: CartOrdersInterface[],
   order_total: number
}


export interface ActiveTableInterface
{
   table: TableInterface
   paymenttype: PaymentTypeInterface,
   order_details: CartOrdersInterface[]
}


export interface CartInterface
{
   cart_items: MenuItemInterface[],
   sub_total: number,
   total: number
}



export interface RestaurantDataInterface
{
   cover: string,
   id: number,
   logo: string,
   name: string,
   service: number,
   taxes: number
}