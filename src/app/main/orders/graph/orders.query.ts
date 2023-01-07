import gql from "graphql-tag";
import { environment } from "src/environments/environment";




export const GET_HALL_TABLE_QUERY = gql`
  {
    restables (Function: "tablesStatis")
    {
      id
      number
      seats
      isAvail
      waiterId
      waiterName
      orderId
      modified
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
        photo
        name
        description
        price
        menu_options_topics 
        {
          name
          required
          max_option_checks
          menu_options 
          {
            id
            name
            price
            menu_options_topics_id
          }
        }
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



export const SEARCH_ITEMS_BY_NAME_QUERY = (search_string : string)=>{


  return gql`{
    menuCategoriesItems(nameLike: "%${search_string}%" vendor_id: ${environment.vendor_id})     
    {
      id 
      name 
      photo
      price
    }
  }`

}


export const GET_SINGLE_ORDER_DETAILS_QUERY = (order_id: number)=>{   // test with=> (order_id: 2405)

  return gql`
  {
    orders(id: ${order_id}) 
    {
      id 
      taxes
      total
      sub_total
      table {
        number
        seats
      }
      paymenttype {
        name
      }
      order_details {
        amount
        total
        menu_categories_items {
          photo
          name
        }
      }
  
    }
  }`;

};


export const GET_CLIENT_BY_PHONE_NUMBER_QUERY = (client_number: string)=>{

  return gql`
  {
    users(mobileLike: "%${client_number}%")
    {
      id 
      username
      mobile 
      address
    }
  }
  `;

};


export const GET_RESTAURANT_DATA =  gql`{
  restaurants(id: ${environment.vendor_id}) {
     id
     name
     logo
     cover
     taxes
     service
  }
}`;


// export const GET_TABLE_ORDER_CART_ITEMS_QUERY = gql``