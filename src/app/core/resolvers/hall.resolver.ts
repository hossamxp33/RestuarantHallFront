import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { finalize, first, Observable, tap } from "rxjs";
import { LOAD_ALL_TABLES_ACTION } from "src/app/main/orders/store/orders.actions";









@Injectable({
   providedIn: 'root'
})
export class HallResolver implements Resolve<any>
{

   flag: boolean = false;

   constructor(
      private store: Store
   ){}
   
   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any>
   {


      // this is the way, to dispatch an action with route transition
      return this.store.pipe(
         tap(()=>{
            
            if ( !this.flag )
            {
               this.flag = true;
               this.store.dispatch(LOAD_ALL_TABLES_ACTION());
            }

         }),
         first(),
         finalize(()=>{ this.flag = false; })
      );

   }


}