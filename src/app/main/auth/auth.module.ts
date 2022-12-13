import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/core/modules/shared.module";
import { AUTH_ROUTES } from "./auth.routes";
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AuthComponent } from './auth.component';











@NgModule({
   declarations: [
    SignInComponent,
    AuthComponent
  ],
   imports: [
      RouterModule.forChild(AUTH_ROUTES),
      SharedModule
   ],
   exports: []
})
export class AuthModule{}