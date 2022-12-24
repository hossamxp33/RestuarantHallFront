import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('table_seats') table_seats : number = 1;
  @Input('table_number') table_number : number = 1;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }



  table_clicked()
  {


    // add order
        


    // redirect to menu view
    this.router.navigateByUrl('/orders/menu');
  
  }





}
