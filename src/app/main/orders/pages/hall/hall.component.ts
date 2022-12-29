import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStates } from 'src/app/core/interfaces/app.interface';
import { SET_HOME_VIEW_MODE_ACTION } from '../../store/orders.actions';
import { GET_HOME_STATE_MODE_SELECTOR } from '../../store/orders.selectors';





@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.scss']
})
export class HallComponent implements OnInit {


  view: number = 1;
  home_view_mode: number = 1;

  constructor(
    private store: Store<AppStates>
  ) { }

  ngOnInit(): void 
  {

    this.listener_home_state_mode();

  }



  changing_home_view(view_mode: number)
  {
    this.store.dispatch(SET_HOME_VIEW_MODE_ACTION({ home_view_mode: view_mode }));
  }




  listener_home_state_mode()
  {

    this.store.pipe( select(GET_HOME_STATE_MODE_SELECTOR) ).subscribe(
      (home_view_mode: number)=>{
        this.home_view_mode = home_view_mode;
      }
    );


  }







}
