import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {

  
  @Input('data') data : any;
  image_url : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
