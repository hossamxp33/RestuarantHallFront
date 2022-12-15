import gql from "graphql-tag";




export const GET_BILLING_DATA = gql`
query {
  billingAddress{
     address
     floor_number
     apartment_number
  }
}
`;