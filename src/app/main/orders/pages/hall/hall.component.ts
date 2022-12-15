import { Component, OnInit } from '@angular/core';
import { GraphQLService } from 'src/app/core/services/graphql.service';
import { GET_BILLING_DATA } from '../../query/orders.query';




@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.scss']
})
export class HallComponent implements OnInit {


  tables: string[] = [];

  temp : any[] = [];

  constructor(
    private query_s: GraphQLService
  ) { }

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


    this.get_hall_tables_from_apollo();

  }



  get_hall_tables_from_apollo()
  {
    
    this.query_s.query(GET_BILLING_DATA).subscribe(
      (data : any)=>{
        console.log("🎅🏻🍾🎈we got data from graphQL 🥳🥂 🎈: " , data);
      },
      (err)=>{
        console.error(err);
      }
    );
  
  }



}
