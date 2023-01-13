import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request)
            .pipe(

                map(res => {
                    console.log("Passed through the interceptor in response");
                    return res
                }),
                catchError((error: HttpErrorResponse) => {
                    let errorMsg:any;
                    if (error.error instanceof ErrorEvent) {
                        console.log('This is client side error');
                        errorMsg = {message:error.error.message};
                    } else {
                        console.log('This is server side error');
                        errorMsg = {errorCode:error.status,message:error.message};
                    }
                    console.log(errorMsg);
                    return throwError(errorMsg);
                })
            )
    }
}
