import { Component, Input, OnInit } from '@angular/core';
import { FoodModalService } from 'src/app/core/services/food-modal.service';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent implements OnInit {

  @Input('card_img') card_img : string = '../../../../../assets/images/burger_1.svg';

  constructor(
    private food_modal: FoodModalService
  ) { }

  ngOnInit(): void {
  }


  trigger_modal()
  {
    this.food_modal.set_active_status(true);
  }

}
