import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { AppStates } from './core/interfaces/app.interface';

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

    this.load_global_required_states();

  }


  load_global_required_states()
  {


  }
  
  



}
