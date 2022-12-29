import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStates } from 'src/app/core/interfaces/app.interface';
import { ClientInterface } from 'src/app/core/interfaces/orders.interface';
import { SEARCHING_CLIENT_PHONE_NUMBER_ACTION, SET_HOME_VIEW_MODE_ACTION } from '../../store/orders.actions';
import { GET_CLIENTS_RESULTS_SELECTOR } from '../../store/orders.selectors';

@Component({
  selector: 'app-delivery-section',
  templateUrl: './delivery-section.component.html',
  styleUrls: ['./delivery-section.component.scss']
})
export class DeliverySectionComponent implements OnInit {


  clients_results: ClientInterface[] = [];



  constructor(
    private store: Store<AppStates>
  ) { }




  ngOnInit(): void 
  {

    this.listening_clients_results();

  }



  typing_phone_number(text_event: any)
  {

    let client_number = text_event.target.value;

    if ( client_number.length >= 6 )
    {

      this.store.dispatch( SEARCHING_CLIENT_PHONE_NUMBER_ACTION({ client_number: client_number }) );

    }

  }



  listening_clients_results()
  {

    this.store.pipe( select(GET_CLIENTS_RESULTS_SELECTOR) ).subscribe(
      (clients: ClientInterface[])=>{
        this.clients_results = clients;
      }
    );

  }


  add_new_client()
  {

    this.store.dispatch(SET_HOME_VIEW_MODE_ACTION({ home_view_mode: 3 }));

  }



}
