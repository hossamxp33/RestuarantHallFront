import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState, UserInterface } from './core/interfaces/auth.interface';
import { CookieService } from './core/services/cookie.service';
import { sign_in_action } from './main/auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{


  constructor(
    private store: Store<AuthState>
  ){}

  ngOnInit(): void 
  {

    this.check_user_status();
      
  }


  check_user_status()
  {

    let temp = CookieService.get_cookie("user");
    console.log(temp);
    
    if ( temp )
    {
      this.store.dispatch(sign_in_action({ user: JSON.parse(temp) }))
    }

  }


}
