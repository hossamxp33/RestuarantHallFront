import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {

  
  @Input('data') data : any;
  image_url : string = environment.img_url + '/';
  place_holder_img: string = '../../../../../assets/icons/imae_placeholder.png';

  constructor() { }

  ngOnInit(): void {
  }

}
