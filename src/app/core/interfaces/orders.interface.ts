



export interface OrdersState
{
   tables: TableInterface[],
   active_order_table: TableInterface
}


export interface TableInterface
{
   id: number,
   number: number,
   seats: number
}


