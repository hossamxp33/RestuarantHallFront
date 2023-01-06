import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TableInterface } from 'src/app/core/interfaces/orders.interface';
import { OrdersService } from 'src/app/core/services/orders.service';
import { ADD_ORDER_BY_TABLE_ACTION, EDIT_ORDER_ACTION, SAVE_ACTIVE_ORDER_DATA_ACTION, SET_ACTIVE_TABLE_ACTION } from '../../store/orders.actions';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('table') table : TableInterface = {
    number: 0,
    seats: 0,
    id: 0,
    isAvail: false,
    waiterId: 0,
    waiterName: '',
    orderId: 0,
    modified: ''
  };

  constructor(
    private router: Router,
    private store: Store,
    private orders_s: OrdersService
  ) { }

  ngOnInit(): void 
  {

  }




  table_clicked()
  {

    this.store.dispatch(SET_ACTIVE_TABLE_ACTION({ active_table: this.table }));

  }





}
