



export interface OrdersState
{
   tables: TableInterface[],
   active_order_table: TableInterface,
   menu: MenuInterface[],
   active_menu_category: MenuInterface,
   orders: OrderInterface[],
   search_results_type: number,
   searched_items: MenuItemInterface[],
   active_order_details: FullOrderDetailsInteface,
   reservation: ReservationDataInterface,
   home_view_mode: number,
   searched_clients: ClientInterface[]
}


export interface TableInterface
{
   id: number,
   number: number,
   seats: number
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
   price: number
}

export interface OrderInterface
{
   id: number,
   table: TableInterface,
   total: number
}


export interface PaymentTypeInterface
{
   name: string
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