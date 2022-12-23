import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import gql from 'graphql-tag';
import { AuthState, UserInterface } from 'src/app/core/interfaces/auth.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { GraphQLService } from 'src/app/core/services/graphql.service';
import { SIGN_IN_QUERY } from '../../graph/auth.query';
import { sign_in_action } from '../../store/auth.actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {


  sign_in_form : FormGroup = new FormGroup({});


  constructor(
    private router: Router,
    private auth_s: AuthService,
    private fb: FormBuilder,
    private store: Store<AuthState>,
    private graph_s: GraphQLService
  ) { }

  ngOnInit(): void 
  {

    // craete sign-in form
    this.create_form();

  }



  create_form()
  {
    this.sign_in_form = this.fb.group({
      username: [ '' , Validators.required ],
      password: [ '' , Validators.required ],
    });
  }



  sign_in()
  {


    if ( this.sign_in_form.valid )
    {

      let sign_in_form_data = this.sign_in_form.value;
      
      this.signing_in(sign_in_form_data);
      
    }



  }


  signing_in(sign_in_form_data : any)
  {

    this.graph_s.mutate( SIGN_IN_QUERY , sign_in_form_data ).subscribe(
      (response : any)=>{

        let data : UserInterface = response.data.createPerson;

        this.store.dispatch(sign_in_action({ user : { BranchId: data.BranchId, token: data.token, vendorId: data.vendorId } }));

      },
      (err)=>{
        
        alert("username or password is incorrect!");

      }
    );


  }



}
