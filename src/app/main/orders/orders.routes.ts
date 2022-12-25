import { Routes } from "@angular/router";
import { HallResolver } from "src/app/core/resolvers/hall.resolver";
import { MenuResolver } from "src/app/core/resolvers/menu.resolver";
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
            component: HallComponent,
            resolve: { hall: HallResolver }
         },
         {
            path: 'menu',
            component: MenuComponent,
            resolve: { menu: MenuResolver }
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