import { Routes } from "@angular/router";
import { OrdersComponent } from "./orders.component";
import { HallComponent } from "./pages/hall/hall.component";
import { MenuComponent } from "./pages/menu/menu.component";
import { OrderDetailComponent } from "./pages/order-detail/order-detail.component";
import { OrdersAllComponent } from "./pages/orders-all/orders-all.component";






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
         },
         {
            path: 'all',
            component: OrdersAllComponent
         }
      ]
   },
   {
      path: 'detail',
      component: OrderDetailComponent
   }
   
];