import { AuthState } from "./auth.interface"
import { OrdersState } from "./orders.interface"


export interface AppStates
{
   auth: AuthState
   orders: OrdersState
}