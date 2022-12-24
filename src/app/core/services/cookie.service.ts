import { Injectable } from "@angular/core";







@Injectable({ providedIn : 'root' })
export class CookieService
{


    
    // functions
    constructor(){}

    static set_cookie(name : string , value : string)
    {

        document.cookie = name + "=" + value;

    }


    static get_cookie(name : string)
    {

        let required_value;

        document.cookie.split(';').forEach(
            (cookie : string)=>{

                let cookie_pair = cookie.trim().split('=');

                if ( cookie_pair[0] == name )
                {
                    required_value = cookie_pair[1];
                }

            }
        );


        return required_value;

    }


    static delete_cookie(name: string)
    {

        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;'

    }



}