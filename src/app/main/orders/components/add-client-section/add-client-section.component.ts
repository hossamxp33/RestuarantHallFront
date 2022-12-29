import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-client-section',
  templateUrl: './add-client-section.component.html',
  styleUrls: ['./add-client-section.component.scss']
})
export class AddClientSectionComponent implements OnInit {



  add_client_form!: FormGroup;



  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void 
  {

    this.build_form();

  }



  add_client()
  {
    console.log("👤 : ", this.add_client_form.value);
  }


  build_form()
  {

    this.add_client_form = this.fb.group({
      username: [ '', Validators.required ],
      mobile: [ '', Validators.required ],
      address: [ '', Validators.required ]
    });


  }
  

}
