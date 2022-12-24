import gql from "graphql-tag";
import { environment } from "src/environments/environment";




export const GET_HALL_TABLE_QUERY = gql`
  {
    restables(branch_id: ${environment.branch_id}) 
    {
      id
      number
      seats
    }
  }
`;