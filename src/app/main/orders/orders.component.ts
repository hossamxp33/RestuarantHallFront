import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStates } from 'src/app/core/interfaces/app.interface';
import { RestaurantDataInterface } from 'src/app/core/interfaces/orders.interface';
import { environment } from 'src/environments/environment';
import { sign_out_action } from '../auth/store/auth.actions';
import { GET_RESTAURANT_DATA_ACTION, SEARCHED_ITEM_COMPLETE_ACTION, SEARCH_ITEM_BY_NAME_ACTION } from './store/orders.actions';
import { RESTAURANT_DATA_SELECTOR } from './store/orders.selectors';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  restaurant_data: RestaurantDataInterface = {
    id: 0,
    name: '',
    logo: '',
    cover: '',
    service: 0,
    taxes: 0
  };

  img_url = environment.img_url + '/';

  constructor(
    private store: Store<AppStates>
  ) { } 

  ngOnInit(): void 
  {
    
    // save restaurant data
    this.get_restaurant_data();

  }



  signing_out()
  {
    this.store.dispatch(sign_out_action());
  }



  get_restaurant_data()
  {


    this.store.dispatch(GET_RESTAURANT_DATA_ACTION());


    this.store.pipe(select(RESTAURANT_DATA_SELECTOR)).subscribe(
      (data : RestaurantDataInterface)=>{
        
        this.restaurant_data = data;
      }
    );
    
  }


  searching_by_name(search_string : any)
  {

    let search_name = search_string.target.value;

    // START SEARCHING STARTING FROM 3 LETTERS
    if ( search_name.length >= 3 )
    {
      this.store.dispatch(SEARCH_ITEM_BY_NAME_ACTION({ search_string: search_name }));
    }
    else if ( search_name == '' )
    {
      this.store.dispatch(SEARCHED_ITEM_COMPLETE_ACTION( {searched_items: []} ));
    }


  }




}
