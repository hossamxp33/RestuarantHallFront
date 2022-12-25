import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";









@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor
{

   constructor(
      private cookie_s: CookieService
   ){}


   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
   {

      if (request.url.startsWith(environment.base_url) || request.url.startsWith(environment.graph_url)) 
      {

         let user = this.cookie_s.get('user');
         let lang = this.cookie_s.get('lang');

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
