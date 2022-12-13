import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  orders : any[] = [];

  constructor() { }

  ngOnInit(): void 
  {


    this.orders = [
      {
        img: '../../../../../assets/images/burger_cart_1.svg',
        name: 'دوبل بيف برجر',
        size: 'صغير',
        price: 17 
      },
      {
        img: '../../../../../assets/images/burger_cart_2.svg',
        name: 'دوبل بيف برجر',
        size: 'صغير',
        price: 17 
      },
      {
        img: '../../../../../assets/images/burger_cart_3.svg',
        name: 'دوبل بيف برجر',
        size: 'صغير',
        price: 17 
      }
    ];


  }

}
