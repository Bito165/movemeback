import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

import { LoaderService } from 'src/services/business/shared/loader/loader.service';
import { NotificationsService } from 'src/services/business/shared/notifications/notifications.service';
@Injectable()
  export class HttpErrorInterceptor implements HttpInterceptor {
    errorMessage = '';
    constructor(private loaderService: LoaderService, private router: Router, private notification: NotificationsService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.show();

        return next.handle(request).pipe(
        
          catchError((error: HttpErrorResponse) => {
            this.loaderService.hide();

            if (error.error instanceof ErrorEvent) {
              // client-side error
              this.errorMessage = `Error: ${error.error.message}`;
            } else {
              // server-side error
              this.getServiceErrorMessage(error);
            }

            return throwError(this.errorMessage);
          }),
          
          tap(evt => {
            // custom api errors
            if (evt instanceof HttpResponse) {
              this.loaderService.hide();
              
              if (evt.body.code !== 1 && !evt.body.token_type) {
                this.errorMessage = evt.body.errors[0] || evt.body.payload || evt.body.description;
                this.notification.publishMessages(this.errorMessage, 'danger', 1);
              }
            }
          }),

         
        );

    }

    getServiceErrorMessage (error: HttpErrorResponse): void{
      switch (error.status) {
        case 401: {
          this.notification.publishMessages('Your Token has expired. Please Login', 'danger', 1);
          this.router.navigate(['/']);
          break
        }
        case 503: {
          this.errorMessage = 'An Internal Error Occurred. Our Engineers Have Been Contacted';
          this.notification.publishMessages(this.errorMessage, 'danger', 1);
          break;
        }
        case 500: {
          this.errorMessage = 'An Internal Error Occurred. Our Engineers Have Been Contacted';
          this.notification.publishMessages(this.errorMessage, 'danger', 1);
          break;
        }
        case 400: {
          this.errorMessage = 'An Error Occurred While Processing Your Request. Please Try Again';
          if (error.error.error === 'invalid_grant'){
            this.notification.publishMessages(error.error.errorDescription, 'danger', 1);
          }else{
            this.notification.publishMessages(this.errorMessage, 'danger', 1);
          }
          break;
        }
        case 404: {
          this.errorMessage = 'An Error Occurred While Processing Your Request. Please Try Again';
          this.notification.publishMessages(this.errorMessage, 'danger', 1);
          break;
        }
        case 405: {
          this.errorMessage = 'An Error Occurred While Processing Your Request. Please Try Again';
          this.notification.publishMessages(this.errorMessage, 'danger', 1);
          break;
        }
        case 0: {
          this.errorMessage = 'A Connection Error Occurred. Please Check Your Network Connection';
          this.notification.publishMessages(this.errorMessage, 'danger', 1);
          break;
        }
      }
    }
  }
