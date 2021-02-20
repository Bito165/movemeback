import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  authenticationToken = '';

  constructor() {
  }

  intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
      
    this.authenticationToken = JSON.stringify(localStorage.getItem("access_token"));
   
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authenticationToken}`
      }
    });

    return next.handle(request);
  }
}
