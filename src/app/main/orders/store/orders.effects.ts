import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { tap } from "rxjs";
import { GraphQLService } from "src/app/core/services/graphql.service";
import { GET_HALL_TABLE_QUERY } from "../query/orders.query";
import { LOAD_ALL_TABLES_ACTION, TABLES_LOADED_ACTION } from "./orders.actions";






@Injectable({ providedIn: 'root' })
export class HallEffects
{



   constructor(
      private actions$: Actions,
      private query_s: GraphQLService,
      private store: Store
   ){}



   // EFFECTS
   loading_tables = createEffect(
      ()=>{
         return this.actions$.pipe(
            ofType(LOAD_ALL_TABLES_ACTION),
            tap(()=>{

               this.get_hall_tables_from_apollo();

            })
         );
      },
      { dispatch: false }
   );




   // FUNCTIONS
   get_hall_tables_from_apollo()
   {
     
     this.query_s.query(GET_HALL_TABLE_QUERY).subscribe(
       (response : any)=>{
 
         console.log("🏓 : " , response.data.restables);
         this.store.dispatch(TABLES_LOADED_ACTION( { tables: response.data.restables } ));
       },
       (err)=>{
         console.error(err);
       }
     );
   
   }



}