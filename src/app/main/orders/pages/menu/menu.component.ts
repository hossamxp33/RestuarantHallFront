import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  foods : string[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void 
  {
    this.foods = [
      "../../../../../assets/images/burger_1.svg",
      "../../../../../assets/images/burger_2.svg",
      "../../../../../assets/images/burger_3.svg",
      "../../../../../assets/images/burger_4.svg",
      "../../../../../assets/images/burger_5.svg",
      "../../../../../assets/images/burger_6.svg",
      "../../../../../assets/images/burger_7.svg",
      "../../../../../assets/images/burger_8.svg",
      "../../../../../assets/images/burger_9.svg",
      "../../../../../assets/images/burger_10.svg",
      "../../../../../assets/images/burger_11.svg",
      "../../../../../assets/images/burger_12.svg",
    ];
  }


}
