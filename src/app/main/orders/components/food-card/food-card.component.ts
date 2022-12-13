import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent implements OnInit {

  @Input('card_img') card_img : string = '../../../../../assets/images/burger_1.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
