import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { CookieService } from "ngx-cookie-service";
import { USER_SELECTOR } from "src/app/main/auth/store/auth.selectors";
import { AppStates } from "../interfaces/app.interface";
import { UserInterface } from "../interfaces/auth.interface";







@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate
{

   result: boolean = false;

   constructor(
      private router: Router,
      private store: Store<AppStates>
   ) {}


   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean 
   {
   
      this.result = false;
      
      this.store.pipe( select(USER_SELECTOR) ).subscribe(
         (user_data: UserInterface)=>{

            if ( user_data.token )
            {
               this.result = true;
            }
            else
            {
               this.result = false;
            }
         }
      );

      if ( !this.result ) this.router.navigateByUrl('/');
      return this.result;
   }


}