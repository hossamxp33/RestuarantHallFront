import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStates } from 'src/app/core/interfaces/app.interface';
import { FullOrderDetailsInteface, OrderInterface } from 'src/app/core/interfaces/orders.interface';
import { GET_ORDER_DETAILS_ACTION } from '../../store/orders.actions';
import { ACTIVE_ORDER_DETAILS_SELECTOR, ALL_ORDERS_STATE } from '../../store/orders.selectors';

@Component({
  selector: 'app-orders-all',
  templateUrl: './orders-all.component.html',
  styleUrls: ['./orders-all.component.scss']
})
export class OrdersAllComponent implements OnInit {


  orders : OrderInterface[] = [];
  order_details : any[] = [];
  orders_date : Date = new Date();
  active_order_details: FullOrderDetailsInteface = {
    id: 0,
    taxes: 0,
    total: 0,
    sub_total: 0,
    table: {
       id: 0,
       number: 0,
       seats: 0
    },
    paymenttype: {
      name: '--'
    },
    order_details: []
 };

 orders_total: number = 0;

  constructor(
    private store: Store<AppStates>
  ) { }

  ngOnInit(): void 
  {


    this.get_all_orders();


    this.get_active_order_details();

  }


  

  get_all_orders()
  {

    this.store.pipe( select(ALL_ORDERS_STATE) ).subscribe(
      (orders : OrderInterface[])=>{

        this.orders = orders;

      this.calculating_all_orders_total(orders);

      }
    );


  }



  show_order_details(order : any)
  {

    this.store.dispatch(GET_ORDER_DETAILS_ACTION({ order_id: order.id }));
  }


  get_active_order_details()
  {

    this.store.pipe( select(ACTIVE_ORDER_DETAILS_SELECTOR) ).subscribe(
      (order_details: FullOrderDetailsInteface)=>{
        this.active_order_details = order_details;
      }
    );


  }



  calculating_all_orders_total(orders : OrderInterface[])
  {

    let orders_total = 0;

    // check if orders exists!
    if ( orders.length != 0 )
    {
      
      orders.forEach((order: OrderInterface)=>{
        orders_total += order.total;
      });

    }
    else
    {
      orders_total = 0;
    }


    this.orders_total = orders_total;

  }


}


