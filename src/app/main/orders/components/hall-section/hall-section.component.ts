import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStates } from 'src/app/core/interfaces/app.interface';
import { TABLES_SELECTOR } from '../../store/orders.selectors';

@Component({
  selector: 'app-hall-section',
  templateUrl: './hall-section.component.html',
  styleUrls: ['./hall-section.component.scss']
})
export class HallSectionComponent implements OnInit {




  tables: any[] = [];


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
      (response : any)=>{
        this.tables = response;
      },
      (err)=>{
        console.error(err);
      }
    );

  }




}
