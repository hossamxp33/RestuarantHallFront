import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { CartOrdersInterface, TableInterface } from "../interfaces/orders.interface";








@Injectable({
   providedIn: 'root'
})
export class OrdersService
{

   constructor(
      private http: HttpClient
   ){}


   add_order_by_table(table : TableInterface)
   {
      return this.http.post(`${environment.base_url}/orders/addForHall` , 
         {
            table_id : table.id,
            order_type_id: 2     // order in hall 
         }
      );
   }



   edit_order_by_id(order_id : number , order_details: CartOrdersInterface[], order_total: number)
   {
      return this.http.post(`${environment.base_url}/orders/edit/${order_id}` , 
      {
         branch_id: environment.branch_id,
         order_details: order_details,
         total: order_total
      });
   }






}