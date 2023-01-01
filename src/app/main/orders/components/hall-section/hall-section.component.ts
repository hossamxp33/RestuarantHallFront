import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStates } from 'src/app/core/interfaces/app.interface';
import { TableInterface } from 'src/app/core/interfaces/orders.interface';
import { TABLES_SELECTOR } from '../../store/orders.selectors';

@Component({
  selector: 'app-hall-section',
  templateUrl: './hall-section.component.html',
  styleUrls: ['./hall-section.component.scss']
})
export class HallSectionComponent implements OnInit {




  tables: TableInterface[] = [];
  tables_count : number = 0;
  customers_count : number = 0;

  constructor(
    private store: Store<AppStates>
  ) { }

  ngOnInit(): void 
  {

    this.get_tables();

  }



  
  get_tables()
  {

    this.store.pipe(select(TABLES_SELECTOR)).subscribe(
      (response : TableInterface[])=>{
        
        this.tables = response;

        this.get_tables_info();

      },
      (err)=>{
        console.error(err);
      }
    );

  }



  get_tables_info()
  {

    let tables_count = this.tables.length;
    
    let customers_count = 0;

    this.tables.forEach(
      (table : TableInterface)=>{
        customers_count += table.seats;
      }
    );

    this.tables_count = tables_count;
    this.customers_count = customers_count;

  }



}
