import gql from "graphql-tag";
import { environment } from "src/environments/environment";




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



export const GET_MENU_QUERY = gql`
  {
    menuCategories(vendor_id: ${environment.vendor_id}) 
    {
      id 
      name   
      menu_categories_items
      {
        id 
        name
        photo
        price
      }
    }
  }`;