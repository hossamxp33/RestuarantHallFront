



export interface OrdersState
{
   tables: TableInterface[],
   active_order_table: TableInterface,
   menu: MenuInterface[],
   active_menu_category: MenuInterface,
   orders: OrderInterface[],
   search_results_type: number,
   searched_items: MenuItemInterface[]
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