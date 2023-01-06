import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStates } from 'src/app/core/interfaces/app.interface';
import { CartInterface, RestaurantDataInterface } from 'src/app/core/interfaces/orders.interface';
import { GET_CART_ITEMS_SELECTOR, RESTAURANT_DATA_SELECTOR } from '../../store/orders.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart : CartInterface = {
    cart_items: [],
    sub_total: 0,
    total: 0
  };

  restaurant_data: RestaurantDataInterface = {
    id: 0,
    name: '',
    logo: '',
    cover: '',
    service: 0,
    taxes: 0
  };

  cart_total: number = 0;

  constructor(
    private store: Store<AppStates>
  ) {}

  ngOnInit(): void 
  {

    this.get_cart_orders();

    this.get_restaurant_data();

  }


  get_cart_orders()
  {

    this.store.pipe( select(GET_CART_ITEMS_SELECTOR) ).subscribe(
      (cart: CartInterface)=>{

        this.cart = cart;
      
        this.calculate_total();

      }
    );

  }


  get_restaurant_data()
  {

    this.store.pipe(select(RESTAURANT_DATA_SELECTOR)).subscribe(
      (data : RestaurantDataInterface)=>{
        this.restaurant_data = data;
      }
    );

  }


  calculate_total()
  {
    this.cart_total = this.cart.sub_total + this.restaurant_data.service + this.restaurant_data.taxes; 
  }


}
