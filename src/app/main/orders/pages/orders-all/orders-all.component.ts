import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStates } from 'src/app/core/interfaces/app.interface';
import { OrderInterface } from 'src/app/core/interfaces/orders.interface';
import { ALL_ORDERS_STATE } from '../../store/orders.selectors';

@Component({
  selector: 'app-orders-all',
  templateUrl: './orders-all.component.html',
  styleUrls: ['./orders-all.component.scss']
})
export class OrdersAllComponent implements OnInit {


  orders : any[] = [];
  order_details : any[] = [];
  orders_date : Date = new Date();
  


  constructor(
    private store: Store<AppStates>
  ) { }

  ngOnInit(): void 
  {


    this.get_all_orders();



    this.order_details = [
      {
        img: '../../../../../assets/icons/burger_circle.svg',
        name: 'بيف برجر',
        size: 'صغير',
        quantity: 2,
        price: 20
      },
      {
        img: '../../../../../assets/icons/burger_circle.svg',
        name: 'بيف برجر',
        size: 'صغير',
        quantity: 2,
        price: 20
      },
      {
        img: '../../../../../assets/icons/burger_circle.svg',
        name: 'بيف برجر',
        size: 'صغير',
        quantity: 2,
        price: 20
      },
      {
        img: '../../../../../assets/icons/burger_circle.svg',
        name: 'بيف برجر',
        size: 'صغير',
        quantity: 2,
        price: 20
      }
    ];

  }


  

  get_all_orders()
  {

    this.store.pipe( select(ALL_ORDERS_STATE) ).subscribe(
      (orders : OrderInterface[])=>{

        this.orders = orders;

        console.log("🎄: " , this.orders);

      }
    );


  }




}


