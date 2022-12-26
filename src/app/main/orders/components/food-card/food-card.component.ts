import { Component, Input, OnInit } from '@angular/core';
import { MenuInterface, MenuItemInterface } from 'src/app/core/interfaces/orders.interface';
import { FoodModalService } from 'src/app/core/services/food-modal.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent implements OnInit {

  @Input('category') category : MenuItemInterface = {
    id: 0,
    name: '',
    photo: '',
    price: 0
  };

  img_url: string = environment.img_url + "/";

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
