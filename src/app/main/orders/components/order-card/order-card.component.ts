import { Component, Input, OnInit } from '@angular/core';
import { OrderInterface } from 'src/app/core/interfaces/orders.interface';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent implements OnInit {


  @Input('order') order : OrderInterface = {
    id: 0,
    table: {
      id: 0,
      seats: 0,
      number: 0,
      isAvail: false,
      waiterId: 0,
      waiterName: '',
      orderId: 0,
      modified: ''    
    },
    total: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
