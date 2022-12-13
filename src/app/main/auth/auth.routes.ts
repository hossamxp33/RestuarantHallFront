import { Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { SignInComponent } from "./pages/sign-in/sign-in.component";





export const AUTH_ROUTES : Routes = [
   {
      path: '',
      component: AuthComponent,
      children: [
         {
            path: 'sign-in',
            component: SignInComponent
         }
      ]
   }
   
];