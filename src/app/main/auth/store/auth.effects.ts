import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { CookieService } from "ngx-cookie-service";
import { tap } from "rxjs";
import { AppStates } from "src/app/core/interfaces/app.interface";
import { GraphQLService } from "src/app/core/services/graphql.service";
import { sign_in_action, sign_out_action } from "./auth.actions";





@Injectable({ providedIn: 'root' })
export class AuthEffects
{

   sign_in$ = createEffect( ()=>{
      return this.actions$.pipe(
         ofType(sign_in_action),
         tap((action)=>
         {

            // save user data
            this.cookie_s.set('user' , JSON.stringify(action.user) , undefined , '/');

            // redirect to home page
            this.router.navigateByUrl("/orders/hall");
         
         })
      );
   } , { dispatch: false } );


   sign_out$ = createEffect(
      ()=>{
         return this.actions$.pipe(
            ofType(sign_out_action),
            tap((action)=>
            {
               
               // delete user data
               this.cookie_s.deleteAll('/');
            
               // redirect to sign-in page
               this.router.navigateByUrl("/");
            
            })
         );
      },
      { dispatch: false }
   );






   constructor(
      private actions$: Actions,
      private router: Router,
      private cookie_s: CookieService,
      private graph_s: GraphQLService,
      private store: Store<AppStates>
   )
   {}



}