import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { sign_out_action } from '../auth/store/auth.actions';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(
    private store: Store
  ) { } 

  ngOnInit(): void {
  }



  signing_out()
  {
    this.store.dispatch(sign_out_action());
  }

}
