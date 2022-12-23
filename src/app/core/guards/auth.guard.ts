import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { CookieService } from "../services/cookie.service";







@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate
{


   constructor(
      private router: Router
   ) {}


   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean 
   {
   
      let user_state = CookieService.get_cookie("user");

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