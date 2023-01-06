import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStates } from 'src/app/core/interfaces/app.interface';
import { MenuItemInterface } from 'src/app/core/interfaces/orders.interface';
import { environment } from 'src/environments/environment';
import { SET_ACTIVE_FOOD_ITEM_ACTION, TOGGLE_FOOD_MODAL_ACTION } from '../../store/orders.actions';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent implements OnInit {

  @Input('food') food : MenuItemInterface = {
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

  img_url: string = environment.img_url + "/";

  constructor(
    private store: Store<AppStates>
  ) { }

  ngOnInit(): void 
  {
 
  }


  
  trigger_modal()
  {

    this.store.dispatch( SET_ACTIVE_FOOD_ITEM_ACTION({ food_item: { 
      ...this.food,
      quantity: 1,
      total: 0,
      note: '',
      selected_options: []
    }}));
    this.store.dispatch( TOGGLE_FOOD_MODAL_ACTION({ visibility_status: true }) );

  }




}
