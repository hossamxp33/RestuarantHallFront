import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { TableInterface } from "../interfaces/orders.interface";








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
            table_id : table.id
         }
      );
   }


}