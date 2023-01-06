import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStates } from 'src/app/core/interfaces/app.interface';
import { MenuItemInterface } from 'src/app/core/interfaces/orders.interface';
import { environment } from 'src/environments/environment';
import { CHANGED_CART_ITEM_QUANTITY_ACTION, DELETE_CART_ITEM_ACTION } from '../../store/orders.actions';

@Component({
  selector: 'app-cart-food-card',
  templateUrl: './cart-food-card.component.html',
  styleUrls: ['./cart-food-card.component.scss']
})
export class CartFoodCardComponent implements OnInit {


  @Input('order') order :  MenuItemInterface = {
    id: 0,
    photo: "",
    name: "",
    description: "",
    price: 0,
    quantity: 1,
    total: 0,
    note: '',
    selected_options: [],
    menu_options_topics: []
  };

  image_url : string = environment.img_url + "/";

  constructor(
    private store: Store<AppStates>
  ) {}

  ngOnInit(): void {
  }



  delete_me(order_id: number)
  {

    this.store.dispatch( DELETE_CART_ITEM_ACTION({ item_id: order_id }) );

  }


  changed_my_quantity(order_id: number , operation_type: "plus" | "minus")
  {
    this.store.dispatch( CHANGED_CART_ITEM_QUANTITY_ACTION({ order_id: order_id, operation_type: operation_type }) );

  }


}
