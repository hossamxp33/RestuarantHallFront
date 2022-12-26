import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { AuthState } from './core/interfaces/auth.interface';
import { sign_in_action } from './main/auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{


  constructor(
    private store: Store<AuthState>,
    private cookie_s: CookieService
  ){}

  ngOnInit(): void 
  { 

    // auto-login if user signed-in (token exists!)
    this.check_user_status();

    // get restaurants details
    this.get_restaurant_details();
      
  }


  check_user_status()
  {

    let temp = this.cookie_s.get('user');

    if ( temp )
    {
      this.store.dispatch(sign_in_action({ user: JSON.parse(temp) }));
    }


  }


  get_restaurant_details()
  {

    

  }


}
