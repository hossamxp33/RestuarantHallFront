import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { finalize, first, tap } from "rxjs";
import { LOAD_ALL_ORDERS_ACTION } from "src/app/main/orders/store/orders.actions";
import { AppStates } from "../interfaces/app.interface";






@Injectable({ providedIn: 'root' })
export class OrdersAllResolver implements Resolve<any>
{

   flag: boolean = false;
   today_date: string = new Date().toISOString().split('T')[0];

   constructor(
      private store: Store<AppStates>
   ){}

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
   {

      return this.store.pipe(
         tap(()=>{

            if ( !this.flag )
            {
               this.flag = true;
               this.store.dispatch(LOAD_ALL_ORDERS_ACTION({ date: this.today_date }));
            }

         }),
         first(),
         finalize(()=>{ this.flag = false; })
      );

       
   }



}