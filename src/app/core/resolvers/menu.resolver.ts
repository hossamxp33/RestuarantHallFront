import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { finalize, first, Observable, tap } from "rxjs";
import { LOAD_MENU_ACTION } from "src/app/main/orders/store/orders.actions";
import { AppStates } from "../interfaces/app.interface";







@Injectable({
   providedIn: 'root'
})
export class MenuResolver implements Resolve<any>
{

   flag: boolean = false;

   constructor(
      private store: Store<AppStates>
   ){}

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any>
   {

      return this.store.pipe(
         tap(()=>{

            if ( !this.flag )
            {
               this.flag = true;
               this.store.dispatch(LOAD_MENU_ACTION());
            }
            
         }),
         first(),
         finalize(()=>{ this.flag = false; })
      );
       
   }


}