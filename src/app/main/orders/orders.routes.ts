import { Routes } from "@angular/router";
import { OrdersComponent } from "./orders.component";
import { HallComponent } from "./pages/hall/hall.component";
import { MenuComponent } from "./pages/menu/menu.component";






export const ORDERS_ROUTES : Routes = [
   {
      path: '',
      component: OrdersComponent,
      children: [
         {
            path: '',
            pathMatch: 'full',
            redirectTo: 'hall'
         },
         {
            path: 'hall',
            component: HallComponent
         },
         {
            path: 'menu',
            component: MenuComponent
         }
      ]
   }
   
];