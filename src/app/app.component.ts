import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { AppStates } from './core/interfaces/app.interface';
import { UserInterface } from './core/interfaces/auth.interface';
import { sign_in_action } from './main/auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{


  constructor(
    private cookie_s: CookieService,
    private store: Store<AppStates>
  ){}

  ngOnInit(): void 
  { 


  }



  
  



}
