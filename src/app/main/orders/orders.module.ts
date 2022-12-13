import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/core/modules/shared.module";
import { OrdersComponent } from "./orders.component";
import { ORDERS_ROUTES } from "./orders.routes";
import { MenuComponent } from "./pages/menu/menu.component";
import { HallComponent } from './pages/hall/hall.component';
import { TableComponent } from './components/table/table.component';
import { FoodCardComponent } from './components/food-card/food-card.component';











@NgModule({
   declarations: [
      OrdersComponent,
      MenuComponent,
      HallComponent,
      TableComponent,
      FoodCardComponent,
  ],
   imports: [
      RouterModule.forChild(ORDERS_ROUTES),
      SharedModule
   ],
   exports: []
})
export class OrdersModule{}