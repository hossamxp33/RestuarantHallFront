import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { AuthInterceptor } from "./core/interceptors/auth.interceptor";






export const APP_PROVIDERS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  CookieService
]