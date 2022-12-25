import gql from "graphql-tag";




export const GET_HALL_TABLE_QUERY = gql`
  {
    restables 
    {
      id
      number
      seats
    }
  }
`;