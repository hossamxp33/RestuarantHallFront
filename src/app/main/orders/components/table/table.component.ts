import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TableInterface } from 'src/app/core/interfaces/orders.interface';
import { ADD_ORDER_BY_TABLE_ACTION } from '../../store/orders.actions';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('table') table : TableInterface = this.init_table();

  constructor(
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void 
  {

    this.init_table();

  }


  init_table()
  {
    return {
      number: 0,
      seats: 0,
      id: 0
    };
  }



  table_clicked()
  {

    // add order
    this.store.dispatch(ADD_ORDER_BY_TABLE_ACTION( { table : this.table } ));
  
  }





}
