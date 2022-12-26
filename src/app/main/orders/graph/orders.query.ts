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


export const GET_ALL_ORDERS_QUERY = (filter_date : string)=>{

  return gql`
  {
    orders( branch_id: ${environment.branch_id} , DateFilter: "${filter_date}" ) 
    {
      id 
      total 
      paymenttype {
        name
      }
      order_details {
        total
        menu_categories_items {
          name
          photo
          price
        }
      }
      table {
        number
        seats
      } 
    } 
  }`;

};