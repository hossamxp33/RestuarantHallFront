import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/core/modules/shared.module";
import { AUTH_ROUTES } from "./auth.routes";
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AuthComponent } from './auth.component';
import { StoreModule } from "@ngrx/store";
import { Auth_REDUCER } from "./store/auth.reducers";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./store/auth.effects";











@NgModule({
   declarations: [
    SignInComponent,
    AuthComponent
  ],
   imports: [
      RouterModule.forChild(AUTH_ROUTES),
      SharedModule,
      StoreModule.forFeature('auth' , Auth_REDUCER),
      EffectsModule.forFeature([AuthEffects])
   ],
   exports: []
})
export class AuthModule{}