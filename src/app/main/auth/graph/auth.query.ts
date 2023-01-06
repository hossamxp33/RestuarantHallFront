import gql from "graphql-tag";
import { environment } from "src/environments/environment";




export const SIGN_IN_QUERY = gql`mutation {
   createPerson(input: 
   {
      username: "",
      password: ""
   }) 
   {
      token BranchId vendorId 
   }
}`;


