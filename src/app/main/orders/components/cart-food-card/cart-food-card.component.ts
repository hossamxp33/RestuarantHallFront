import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-food-card',
  templateUrl: './cart-food-card.component.html',
  styleUrls: ['./cart-food-card.component.scss']
})
export class CartFoodCardComponent implements OnInit {


  @Input('food_img') food_img : string = '';
  @Input('food_name') food_name : string = '';
  @Input('food_size') food_size : string = '';
  @Input('food_price') food_price : string = '';
  image_url : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
