import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent implements OnInit {


  @Input('order_number') order_number : number = 0;
  @Input('table_number') table_number : number = 0;
  @Input('guests_number') guests_number : number = 0;
  @Input('total') total : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
