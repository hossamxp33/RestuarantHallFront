import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppStates } from 'src/app/core/interfaces/app.interface';
import { CartItemInterface, MenuItemInterface, MenuItemTopicsOptionsInterface } from 'src/app/core/interfaces/orders.interface';
import { environment } from 'src/environments/environment';
import { ADD_ITEM_TO_CART_ACTION, TOGGLE_FOOD_MODAL_ACTION } from '../../store/orders.actions';
import { GET_FOOD_MODAL_VISIBILITY_STATUS_SELECTOR, GET_SELECTED_FOOD_ITEM } from '../../store/orders.selectors';

@Component({
  selector: 'app-food-modal',
  templateUrl: './food-modal.component.html',
  styleUrls: ['./food-modal.component.css']
})
export class FoodModalComponent implements OnInit , OnDestroy {


  modalContent: any;
  qty: number = 0;
  base_price : number = 0;
  total_price: number = 0;
  options : {} = {};   //this is topics
  note: string = '';
  option: string = '';
  optionsId: any[] = [];
  rest_id : number = 0;
  active_radio_btn : string = '';
  recycables : Subscription[] = [];
  form! : FormGroup;
  checked_meal_options : any[] = [];
  meal_topics : any[] = [];
  checkbox_available : boolean = true;
  
  
  
  
  
  
  extra_price : number = 0;
  lang : string = localStorage.getItem('lang') || 'en';
  img_url : string = environment.img_url + "/";
  is_modal_active : boolean = false;

  food_data: MenuItemInterface = {  // this is read-only
    id: 0,
    photo: "",
    name: "",
    description: "",
    price: 0,
    quantity: 1,
    total: 0,
    note: '',
    selected_options: [],
    menu_options_topics: []
  };

  new_food_data: MenuItemInterface = {    // make a copy to modify
    id: 0,
    photo: "",
    name: "",
    description: "",
    price: 0,
    quantity: 1,
    total: 0,
    note: '',
    selected_options: [],
    menu_options_topics: []
  };

  
  constructor(
    private store: Store<AppStates>
  ) {}

  ngOnInit(): void 
  {


    // SUBSCRIBE TO TOGGLING VISIBILITY COMMAND
    this.listen_to_toggle();

    // GET MODAL FOOD DATA
    this.get_food_data();


  }

  
  ngOnDestroy(): void 
  {
      
  }





  listen_to_toggle()
  {

    this.store.pipe( select(GET_FOOD_MODAL_VISIBILITY_STATUS_SELECTOR) ).subscribe(
      (response: boolean)=>{
        this.is_modal_active = response;
      }
    );

  }



  get_food_data()
  {
    
    this.store.pipe( select( GET_SELECTED_FOOD_ITEM ) ).subscribe(
      (food_item: MenuItemInterface)=>{

        this.food_data = food_item;

        this.new_food_data = { ...this.food_data, total: this.food_data.price };

      }
    );

  }



  note_changed(input_event : any)
  {

    console.log(" 😼 : ", input_event.target.value);
    this.new_food_data.note = input_event.target.value;


  }




  changeQty(sign: string) 
  {

    if (sign == '+') 
    {
      this.new_food_data.quantity++;
    }
    else if ( sign == '-' && this.new_food_data.quantity > 1)
    {
      this.new_food_data.quantity--;
    }

    this.calculateTotalPrice();

  }




  
  calculateTotalPrice() 
  {

    
    // get options price for single meal
    this.extra_price = 0 ;
    this.new_food_data.selected_options.forEach((el : any)=>{ this.extra_price+= el.price; });
    
    // calculate total price
    this.new_food_data.total = +( (this.new_food_data.price  + this.extra_price) * this.new_food_data.quantity ).toFixed(2);
    
  }




  disabledOption(topic : any, option : any) 
  {

    // when first init of food modal and there is no options selected
    if ( this.new_food_data.selected_options.length == 0 )
    {
      return false;
    }

  
    if ( topic.max_option_checks > 1 )   // checkbox
    {
      // get number of checkbox options for this topic
      let count_options_by_topic = 0;
      let ckeckbox_on = false;

      this.new_food_data.selected_options.forEach((el : any)=>{
        
        if ( el.menu_options_topics_id == topic.id )
        {
          count_options_by_topic++;

          if ( el.id == option.id ) 
          {
            ckeckbox_on = true;
            // return false;
          }
          

        }

      });
      


      // check we only choose number of options allowed
      if ( count_options_by_topic == topic.max_option_checks ) 
      {

        if ( ckeckbox_on )
        {
          return false; 
        }
        else
        {
          return true;
        }

      }
      else
      {
        this.checkbox_available = true;
        return false;
      }

    }
    else  // radio
    {
      return false;
    }

  
  }




  changeOptions(event : any, option : any , topic : any)
  {

    let is_checked = event.target.checked;

    // check if this option is radio or checkbox

    if ( topic.max_option_checks > 1 )
    {

      // this is checkbox
      
      if ( is_checked && this.checkbox_available ) // if checked
      {
        // console.log("option ✅: " , option);
  
        this.new_food_data.selected_options.push(option);

      }
      else  // unchecked
      {

        this.new_food_data.selected_options = this.new_food_data.selected_options.filter((el : any , i : number)=>{
          return el.id != option.id
        });


        
        // check disabled
        this.disabledOption(topic, option); 
  
      }

    }
    else
    {
      // this is radio

      // remove all radio options from meal options for this topic
      this.new_food_data.selected_options = this.new_food_data.selected_options.filter((el : any)=>{
        return el.menu_options_topics_id != topic.id;
      });

      // set radio option for this topic
      this.new_food_data.selected_options.push(option);

    }



    // UPDATE PRICE
    this.calculateTotalPrice();

  }

  


  add_to_cart(): void 
  {


    // get
    
    
    // check if required topics has been choosed
    let req_fultilled : boolean = this.check_required_options(this.new_food_data.selected_options);


    if ( req_fultilled )
    {

      
      // format object to be used in cart (remove topics property)
      let temp : any = { ...this.new_food_data };
      delete temp.menu_options_topics;

      let cart_item_format : CartItemInterface = temp;


      this.store.dispatch( ADD_ITEM_TO_CART_ACTION({ food_item: cart_item_format }) );

      this.exit_food_modal();

    }
    else
    {
      alert('⚠️لو سمحت اختار واحد من الاختيارات الالزامية!');
    }



 

  }


  check_required_options(selected_options : MenuItemTopicsOptionsInterface[]) : boolean
  {


    let selected_options_ids = selected_options.map((option)=>{ return option.id; });


    if (  this.new_food_data.menu_options_topics  )  // if exist any topics
    {


      // get array of arrays for req. topics
      let array_of_req_topics_options : any[] = [];

      (this.new_food_data.menu_options_topics as Array<any>).forEach((el : any)=>{

        if ( el.required == 1 )
        {
          array_of_req_topics_options.push(el);
        }

      });


      
      // map array to id of final order
      let topics_selected_status : any[] = array_of_req_topics_options.map((topic : any)=>{   // loop  -> topics

        let topic_option_selected = false;

        (topic.menu_options as Array<any>).forEach((option : any)=>{    // loop  -> options /of/ topic
 

          selected_options_ids.forEach((selected_option : any)=>{
            if ( option.id == selected_option )
            {
              topic_option_selected = true;
            }

          });

        
        });

        return topic_option_selected;

      });


      // loop through topics selected array and get final status of selecting req. topics
      let final_order_selection_status : boolean = true;
      
      topics_selected_status.forEach((el : any)=>{
        if ( !el )
        {
          final_order_selection_status = false;
        }

      });


      // final result
      return final_order_selection_status;

    }
    else
    {
      return true;
    }

  }



  modal_overlay_clicked(clicked_el : any)
  {

    if ( clicked_el.target == clicked_el.currentTarget )  // to target only the parent element
    {
      this.exit_food_modal();
    }

  }


  exit_food_modal()
  {

    // close food modal
    this.store.dispatch( TOGGLE_FOOD_MODAL_ACTION({ visibility_status: false }) );

    // reset modal to initial value
    this.resetModal();

  }


  resetModal(): void 
  {
    
    // reset values
    this.new_food_data = {
      id: 0,
      photo: "",
      name: "",
      description: "",
      price: 0,
      quantity: 1,
      total: 0,
      note: '',
      selected_options: [],
      menu_options_topics: []
    };

  }











}
