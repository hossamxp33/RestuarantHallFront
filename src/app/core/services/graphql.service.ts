import { Injectable } from "@angular/core";
import { DocumentNode } from "@apollo/client/core";
import { Apollo } from "apollo-angular";







@Injectable({ providedIn : 'root' })
export class GraphQLService
{

   constructor(
      private apollo: Apollo
   ){}

   query(query_string : DocumentNode)
   {
      return this.apollo.watchQuery({
         query: query_string
      }).valueChanges;
   
   }

   mutate(query_string : DocumentNode , variables: any)
   {
      return this.apollo.mutate({
         mutation: query_string,
         variables: variables
      });
   
   }


}