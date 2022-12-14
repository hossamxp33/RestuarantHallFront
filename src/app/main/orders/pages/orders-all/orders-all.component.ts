import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-all',
  templateUrl: './orders-all.component.html',
  styleUrls: ['./orders-all.component.scss']
})
export class OrdersAllComponent implements OnInit {


  orders : any[] = [];
  order_details : any[] = [];
  orders_date : Date = new Date();
  


  constructor() { }

  ngOnInit(): void 
  {

    this.orders = [
      {
        order_number: 10,
        table_number: 12,
        guests_number: 2,
        total: 110
      },
      {
        order_number: 10,
        table_number: 12,
        guests_number: 2,
        total: 110
      },
      {
        order_number: 10,
        table_number: 12,
        guests_number: 2,
        total: 110
      },
      {
        order_number: 10,
        table_number: 12,
        guests_number: 2,
        total: 110
      },
      {
        order_number: 10,
        table_number: 12,
        guests_number: 2,
        total: 110
      }
    ];


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


  

}


