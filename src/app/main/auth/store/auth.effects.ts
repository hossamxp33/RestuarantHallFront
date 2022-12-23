import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { CookieService } from "src/app/core/services/cookie.service";
import { sign_in_action, sign_out_action } from "./auth.actions";





@Injectable()
export class AuthEffects
{

   sign_in$ : any;
   sign_out$ : any;

   constructor(
      private actions$: Actions,
      private router: Router
   )
   {
      this.sign_in_effect();
      this.sign_out_effect();
   }


   sign_in_effect()
   {

      this.sign_in$ = createEffect( ()=>{
         return this.actions$.pipe(
            ofType(sign_in_action),
            tap((action)=>
            {
               // save user data
               CookieService.set_cookie("user" , JSON.stringify(action.user));
            
               // redirect to home page
               this.router.navigateByUrl("/orders/hall");
            
            })
         );
      } , { dispatch: false } );

   }



   sign_out_effect()
   {

      this.sign_out$ = createEffect(
         ()=>{
            return this.actions$.pipe(
               ofType(sign_out_action),
               tap((action)=>
               {
               
                  // delete user data
                  CookieService.delete_cookie("user");
               
                  // redirect to sign-in page
                  this.router.navigateByUrl("/auth/sign-in");
               
               })
            );
         },
         { dispatch: false }
      );

   }


}