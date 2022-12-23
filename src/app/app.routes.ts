import { Routes } from "@angular/router";
import { AuthGuard } from "./core/guards/auth.guard";




export const APP_ROUTES : Routes = [
   {
      path: '',
      pathMatch: 'full',
      redirectTo: 'auth/sign-in'
   },
   {
      path: 'auth',
      loadChildren: ()=>import('./main/auth/auth.module').then((f)=>f.AuthModule)
   },
   {
      path: 'orders',
      loadChildren: ()=>import('./main/orders/orders.module').then((f)=>f.OrdersModule),
      canActivate: [ AuthGuard ]
   }
];
