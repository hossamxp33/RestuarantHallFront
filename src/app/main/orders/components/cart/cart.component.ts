import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStates } from 'src/app/core/interfaces/app.interface';
import { CartInterface, RestaurantDataInterface } from 'src/app/core/interfaces/orders.interface';
import { GET_CART_ITEMS_SELECTOR, RESTAURANT_DATA_SELECTOR } from '../../store/orders.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart : CartInterface = {
    cart_items: [],
    sub_total: 0,
    total: 0
  };

  restaurant_data: RestaurantDataInterface = {
    id: 0,
    name: '',
    logo: '',
    cover: '',
    service: 0,
    taxes: 0
  };

  cart_total: number = 0;

  constructor(
    private store: Store<AppStates>
  ) {}

  ngOnInit(): void 
  {

    this.get_cart_orders();

    this.get_restaurant_data();

  }


  get_cart_orders()
  {

    this.store.pipe( select(GET_CART_ITEMS_SELECTOR) ).subscribe(
      (cart: CartInterface)=>{

        this.cart = cart;
      
        this.calculate_total();

      }
    );

  }


  get_restaurant_data()
  {

    this.store.pipe(select(RESTAURANT_DATA_SELECTOR)).subscribe(
      (data : RestaurantDataInterface)=>{
        this.restaurant_data = data;
      }
    );

  }



  calculate_total()
  {
    this.cart_total = this.cart.sub_total + this.restaurant_data.service + this.restaurant_data.taxes; 
  }



  print_transcript()
  {

    // create pop-up for transcript
    let printed_window = window.open(undefined, undefined, "popup,width=400,height=600,left=550,top=120");

    // transcript page data
    let transcript_page = `
    <head>
      <link rel="stylesheet" href="../../../../../assets/css/bootstrap/bootstrap.min.css">
    </head>
    
    <body id="printed_page">
      <div>
        <img src="../../../../../assets/icons/city_rolls_logo_trans.png" class="img-thumbnail" alt="...">
      </div>  
      <div class="text-center">
        <h1>City Rolls</h1>
      </div>
    </body>
    
    <button onclick="print_me();" id="print_btn">print :D</button>
    
    <style>
      h1{color: green} 
      @media print {
        #print_btn
        {
          display: none;
        }
      } 
    </style>
    
    <script>
      function print_me()
      {
        console.log("print clicked!");
        
        window.focus();
        window.print();

        setTimeout( ()=>{ window.close(); } , 5000);

      }
    </script>
    
    `;

    // append transcript page data to pop-up or/ alert if pop-up blocked
    if ( printed_window )
    {
      
      printed_window.document.write(transcript_page);
      
    }
    else
    {
      alert("لو سمحت اسمح للpop-up , لكي تستطيع طباعة الايصال!");
    }


  }







}
