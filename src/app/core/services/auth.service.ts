import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "@apollo/client";
import { environment } from "src/environments/environment";
import { UserInterface } from "../interfaces/auth.interface";








@Injectable({
   providedIn: 'root'
})
export class AuthService
{
 

   constructor(
      private http:HttpClient
   ){}


   sign_in(username: string , password: string) 
   {
      return this.http.post<UserInterface>(`${environment.base_url}/sign-in` , { username , password });
   }



}