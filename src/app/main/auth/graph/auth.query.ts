import gql from "graphql-tag";







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