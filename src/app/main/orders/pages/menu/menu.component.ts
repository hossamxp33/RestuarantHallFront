import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ITEMS_RESULTS_TYPE } from 'src/app/core/enums/items_result_type.enum';
import { AppStates } from 'src/app/core/interfaces/app.interface';
import { MenuInterface, MenuItemInterface, ReservationDataInterface, TableInterface } from 'src/app/core/interfaces/orders.interface';
import { SET_ACTIVE_CATEGORY_ACTION, SET_SEARCH_RESULTS_TYPE_ACTION } from '../../store/orders.actions';
import { ACTIVE_CATEGORY_SELECTOR, GET_ACTIVE_ORDER_SELECTOR, GET_ACTIVE_RESERVATION_SELECTOR, ITEMS_RESULTS_TYPE_SELECTOR, MENU_SELECTOR, SEARCHED_ITEMS_SELECTOR } from '../../store/orders.selectors';

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
  search_results_for_items : MenuItemInterface[] = [];
  results_type: number = ITEMS_RESULTS_TYPE.menu;
  reservation: ReservationDataInterface = {
    table_id: 0,
    waiter_id: 0,
    created_by: 0,
    id: 0
 };
 active_order: TableInterface = {
  id: 0,
  seats: 0,
  number: 0 
 };


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

    // get search results
    this.get_search_results();

    // get the items results display type
    this.get_items_results_type();

    // get reservation data
    this.get_reservation_data();

  }




  get_menu()
  {

    this.store.pipe( select(MENU_SELECTOR) ).subscribe(
      (state_data : MenuInterface[])=>{

        this.store.dispatch(SET_SEARCH_RESULTS_TYPE_ACTION({ search_results_type: ITEMS_RESULTS_TYPE.menu }));

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
        
        this.store.dispatch(SET_SEARCH_RESULTS_TYPE_ACTION({ search_results_type: ITEMS_RESULTS_TYPE.menu }));

        this.active_category = active_category;
        
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

    this.store.dispatch(SET_ACTIVE_CATEGORY_ACTION({ active_category: menu }));

  }


  set_init_active_catogory()
  {

    this.store.dispatch(SET_ACTIVE_CATEGORY_ACTION({ active_category: this.menus[0] }));

  }



  get_search_results()
  {

    this.store.pipe( select(SEARCHED_ITEMS_SELECTOR) ).subscribe(
      (searched_items: MenuItemInterface[])=>{

        this.search_results_for_items = searched_items;

        this.store.dispatch(SET_SEARCH_RESULTS_TYPE_ACTION({ search_results_type: ITEMS_RESULTS_TYPE.search }));

      }
    );

  }



  get_items_results_type()
  {

    this.store.pipe( select(ITEMS_RESULTS_TYPE_SELECTOR) ).subscribe(
      (results_type: number)=>{
        this.results_type = results_type;
      }
    );

  }




  get_reservation_data()
  {

    this.store.pipe( select(GET_ACTIVE_RESERVATION_SELECTOR) ).subscribe(
      (reservation: ReservationDataInterface)=>{
        this.reservation = reservation;
      }
    );


    this.store.pipe( select(GET_ACTIVE_ORDER_SELECTOR) ).subscribe(
      (active_order: TableInterface)=>{
        this.active_order = active_order;
      }
    );


  }


}
