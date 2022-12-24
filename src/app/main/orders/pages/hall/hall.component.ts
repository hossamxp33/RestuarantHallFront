import { Component, OnInit } from '@angular/core';
import { GraphQLService } from 'src/app/core/services/graphql.service';
import { GET_HALL_TABLE_QUERY } from '../../query/orders.query';




@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.scss']
})
export class HallComponent implements OnInit {


  tables: any[] = [];

  temp : any[] = [];

  constructor(
    private query_s: GraphQLService
  ) { }

  ngOnInit(): void 
  {

    this.get_hall_tables_from_apollo();

  }



  get_hall_tables_from_apollo()
  {
    
    this.query_s.query(GET_HALL_TABLE_QUERY).subscribe(
      (response : any)=>{

        this.tables = response.data.restables;

      },
      (err)=>{
        console.error(err);
      }
    );
  
  }



}
