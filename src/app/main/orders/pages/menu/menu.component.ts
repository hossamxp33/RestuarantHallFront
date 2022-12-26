import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppStates } from 'src/app/core/interfaces/app.interface';
import { MenuInterface } from 'src/app/core/interfaces/orders.interface';
import { SET_ACTIVE_CATEGORY_ACTION } from '../../store/orders.actions';
import { ACTIVE_CATEGORY_SELECTOR, MENU_SELECTOR } from '../../store/orders.selectors';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  foods : string[] = [];
  menus: MenuInterface[] = [];
  active_category_index: number = 0;
  active_category: MenuInterface = { id: 0 , name: '', menu_categories_items: [] };

  constructor(
    private router: Router,
    private store: Store<AppStates>
  ) { }

  ngOnInit(): void 
  {

    // get menu
    this.get_menu();

    // get active category
    this.get_active_category();

  }




  get_menu()
  {

    this.store.pipe( select(MENU_SELECTOR) ).subscribe(
      (state_data : MenuInterface[])=>{
        console.log("🎈 : " , state_data);

        this.menus = state_data;

        this.set_init_active_catogory();

      },
      (err)=>{
        console.error(err);
      }
    );

  }


  get_active_category()
  {

    this.store.pipe( select(ACTIVE_CATEGORY_SELECTOR) ).subscribe(
      (active_category : MenuInterface)=>{
        this.active_category = active_category;
        console.log(this.active_category);
      }
    ); 


  }



  menu_category_clicked( menu_cat_item : any, menu: any)
  {

    // change active category
    this.change_active_category(menu_cat_item);

    // load corresponding food based on categories
    this.load_category_food(menu);

  }


  change_active_category(menu_cat_item : any)
  {

    // get all the dom elements of ment category
    let temp = document.querySelectorAll(".menu-cat");    
    let menu_categories_items = Array.from(temp);

    // remove 'active' from all categories 
    menu_categories_items.forEach((item: any)=>{
      item.classList.remove('active');
    });

    // add 'active' to clicked  
    menu_cat_item.classList.add('active');
  }



  load_category_food(menu: any)
  {

    console.log(menu);
    this.store.dispatch(SET_ACTIVE_CATEGORY_ACTION({ active_category: menu }));

  }


  set_init_active_catogory()
  {

    this.store.dispatch(SET_ACTIVE_CATEGORY_ACTION({ active_category: this.menus[0] }));

  }



}
