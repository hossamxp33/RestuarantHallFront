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
    orders( DateFilter: ["${filter_date}","2022-12-31"] ) 
    {
      id
      table {
        id
        seats
        number
      }
      total
    } 
  }`;

};

