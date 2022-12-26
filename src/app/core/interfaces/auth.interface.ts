



export interface AuthState
{
   user : UserInterface,
   restautant_data: RestaurantDataInterface
}






export interface UserInterface
{
   BranchId: string,
   token: string,
   vendorId: string
}


export interface RestaurantDataInterface
{
   cover: string,
   id: number,
   logo: string,
   name: string
}