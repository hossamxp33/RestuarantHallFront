import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TABLES_SELECTOR } from '../../store/orders.selectors';




@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.scss']
})
export class HallComponent implements OnInit {


  tables: any[] = [];

  temp : any[] = [];

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void 
  {

    this.get_tables();

  }



  get_tables()
  {

    this.store.pipe(select(TABLES_SELECTOR)).subscribe(
      (response : any)=>{
        this.tables = response;
      },
      (err)=>{
        console.error(err);
      }
    );

  }






}
