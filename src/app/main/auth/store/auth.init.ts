import { AuthState } from "src/app/core/interfaces/auth.interface";


// state
export const Auth_STATES : AuthState  = { 
   user : {
      BranchId : '',
      token : '',
      vendorId : ''
   },
   restautant_data: {
      cover: '',
      id: 0,
      logo: '',
      name: ''
   }
};  

