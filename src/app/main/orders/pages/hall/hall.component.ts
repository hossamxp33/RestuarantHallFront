import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.scss']
})
export class HallComponent implements OnInit {


  tables: string[] = [];

  constructor() { }

  ngOnInit(): void 
  {

    this.tables = [
      '../../../../../assets/icons/table_1.svg',
      '../../../../../assets/icons/table_2.svg',
      '../../../../../assets/icons/table_3.svg',
      '../../../../../assets/icons/table_4.svg',
      '../../../../../assets/icons/table_5.svg',
      '../../../../../assets/icons/table_6.svg',
      '../../../../../assets/icons/table_7.svg',
      '../../../../../assets/icons/table_8.svg',
      '../../../../../assets/icons/table_9.svg',
      '../../../../../assets/icons/table_10.svg',
      '../../../../../assets/icons/table_11.svg',
      '../../../../../assets/icons/table_12.svg',
      '../../../../../assets/icons/table_13.svg'
    ];


  }

}
