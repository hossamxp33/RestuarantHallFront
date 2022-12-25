import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { CookieService } from "ngx-cookie-service";







@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate
{


   constructor(
      private router: Router,
      private cookie_s: CookieService
   ) {}


   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean 
   {
   
      let user_state = this.cookie_s.get('user');

      if ( user_state )
      {
         return true;
      }
      else
      {

         this.router.navigateByUrl("/");
         return false;
      }
      

   }


}