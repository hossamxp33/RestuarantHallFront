import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CookieService } from "../services/cookie.service";









@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor
{


   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
   {

      if (request.url.startsWith(environment.base_url) || request.url.startsWith(environment.graph_url)) 
      {

         let user = CookieService.get_cookie('user');
         let lang = CookieService.get_cookie('lang');

        if (user)
        {

            request = request.clone({
               headers: request.headers
               .set('Authorization', 'Bearer ' + JSON.parse(user).token )
               .set('lang', lang || 'ar' )
            });
  
        }
        else
        {
            request = request.clone({
               headers: request.headers
               .set('lang', lang || 'ar' )
            });

        }
     
      }
  
      return next.handle(request);
   }


}
