import { Injectable } from "@angular/core";
import { DocumentNode } from "@apollo/client/core";
import { Apollo } from "apollo-angular";







@Injectable({ providedIn : 'root' })
export class GraphQLService
{

   constructor(
      private apollo: Apollo
   ){}

   query(query_string : DocumentNode , body : any = '')
   {

      if ( body != '' )
      {
         return this.apollo.watchQuery({
            query: query_string,
            variables: body
         }).valueChanges;
      }
      else
      {
         return this.apollo.watchQuery({
            query: query_string
         }).valueChanges;
      }


   }


}