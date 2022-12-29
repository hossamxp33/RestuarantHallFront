import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

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
  URL : string = '';
  extra_price : number = 0;
  active_radio_btn : string = '';
  is_modal_active : boolean = false;
  recycables : Subscription[] = [];
  form! : FormGroup;
  checked_meal_options : any[] = [];
  meal_topics : any[] = [];
  checkbox_available : boolean = true;
  lang : string = localStorage.getItem('lang') || 'en';






  
  constructor(
  ) { }

  ngOnInit(): void 
  {
    // set food modal state
    this.sub_to_modal_status(); 

    // listen to food modal
    this.sub_to_food_modal();
    

  }

  
  ngOnDestroy(): void 
  {
      
  }




  sub_to_modal_status()
  {



  }


  sub_to_food_modal()
  {

    // return this.f_m_s.get_modal_data().subscribe(
    //   (data : any)=>{


    //     // check for initial subscription
    //     if (  Object.keys(data).length != 0 )
    //     {

    //       // set modal data
    //       this.modalContent = data;

    //       // set topics data
    //       if ( this.modalContent.menu_options_topics && ( <Array<any>> this.modalContent.menu_options_topics).length != 0 )
    //       {
    //         // meal topics exist
    //         this.meal_topics = ( <Array<any>> this.modalContent.menu_options_topics).map((el : any)=>{
    //           return { id : el.id , max_options_number : el.max_option_checks , name : el.name };
    //         });

    //       }

    //       // console.log("⚠️ modal data : " , this.modalContent);
    //       // console.log("⚠️ modal topics : " , this.meal_topics);


    //       // set seperate data varibles for calc
    //       this.qty = 1;
    //       this.base_price = this.modalContent.price;
    //       this.total_price = this.base_price;

    //     }

    //   }
    // );


  }


  changeQty(sign: string) 
  {

    if (sign == '+') 
    {
      this.qty++;
    }
    else if ( sign == '-' && this.qty > 1)
    {
      this.qty--;
    }

    this.calculateTotalPrice();

  }




  
  calculateTotalPrice() 
  {


    // get options price for single meal
    this.extra_price = 0 ;
    this.checked_meal_options.forEach((el : any)=>{ this.extra_price+= el.price; });

    // calculate total price
    this.total_price = +( (this.base_price  + this.extra_price) * this.qty ).toFixed(2);

  }




  disabledOption(topic : any, option : any) 
  {

    // when first init of food modal and there is no options selected
    if ( this.checked_meal_options.length == 0 )
    {
      return false;
    }

  
    if ( topic.max_option_checks > 1 )   // checkbox
    {
      // get number of checkbox options for this topic
      let count_options_by_topic = 0;
      let ckeckbox_on = false;

      this.checked_meal_options.forEach((el : any)=>{
        
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
  
        this.checked_meal_options.push(option);

      }
      else  // unchecked
      {

        this.checked_meal_options = this.checked_meal_options.filter((el : any , i : number)=>{
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
      this.checked_meal_options = this.checked_meal_options.filter((el : any)=>{
        return el.menu_options_topics_id != topic.id;
      });

      // set radio option for this topic
      this.checked_meal_options.push(option);

    }



    // UPDATE PRICE
    this.calculateTotalPrice();

  }

  


  order(item : any): void 
  {


    // console.log("🍌  :  " , item);

    // get resturant id for selected meal
    // this.rest_id = this.f_m_s.get_resturant_id(item);


    // put all options names in a string (meal options)
    Object.values(this.options).map((option) => 
    {
    
      (option as Array<any>).forEach((el : any)=>{

        this.optionsId.push({ menu_options_id: el.option_id });

      });
      
    });


    // filter order option array for order options id's array
    let order_option_ids = this.checked_meal_options.map((el : any)=>{ return el.id });


    // UPDATE PRICE
    this.calculateTotalPrice();


    // collect options in a string
    let options_string_temp = this.checked_meal_options.map((el : any)=>{ return el.name });
    let options_string = this.checked_meal_options.length == 0 ? 'none' : options_string_temp.join(', ');
    

    // collect order data
    const order: any = {
      optionsId: order_option_ids,
      id: item.id,
      restaurantID: this.rest_id,
      name: item.name,
      options: this.checked_meal_options,
      totalPrice: this.total_price,
      qty: this.qty,
      option: options_string,
      note: this.note,
      menu_categories_itemId: item.id,
      price: item.price
    };


    // console.log("food data send to cart 🍉: " , order );


    
    // check if required topics has been choosed
    let req_fultilled : boolean = this.check_required_options(order);


    if ( req_fultilled )
    {
      // this.store.dispatch(sideBarCart({ cartData: { imgSrc: this.URL + item.photo, name: item.name }, }) );
      this.exit_food_modal();
    }
    else
    {
      alert('⚠️ Please select required options!');
    }



  }




  resetModal(): void 
  {
    // reset values
    this.qty = 1;
    this.options = {};
    this.total_price = 0;
    this.option = '';
    this.note = '';
    this.checked_meal_options = [];

  }


  exit_food_modal()
  {
    // this.f_m_s.set_active_status(false);

    this.resetModal();
  }




  check_required_options(final_order : any) : boolean
  {



    if (  this.modalContent.menu_options_topics  )  // if exist any topics
    {


      // get array of arrays for req. topics
      let array_of_req_topics_options : any[] = [];

      (this.modalContent.menu_options_topics as Array<any>).forEach((el : any)=>{

        if ( el.required == 1 )
        {
          array_of_req_topics_options.push(el);
        }

      });

      // console.log("🤠 : " , array_of_req_topics_options);


      
      // map array to id of final order
      let topics_selected_status : any[] = array_of_req_topics_options.map((topic : any)=>{   // loop  -> topics

        let topic_option_selected = false;

        (topic.menu_options as Array<any>).forEach((option : any)=>{    // loop  -> options /of/ topic
 

          (final_order.optionsId as Array<any>).forEach((selected_option : any)=>{
            if ( option.id == selected_option )
            {
              topic_option_selected = true;
            }

          });

        
        });

        return topic_option_selected;

      });




      // console.log("🤠🤠 : ", topics_selected_status);
      
      // loop through topics selected array and get final status of selecting req. topics
      let final_order_selection_status : boolean = true;
      
      topics_selected_status.forEach((el : any)=>{
        if ( !el )
        {
          final_order_selection_status = false;
        }

      });


      // console.log("🤠🤠🤠 : ", final_order_selection_status);


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
      // console.log('clicked')

      this.exit_food_modal();

    }

  }






}
