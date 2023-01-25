import { CommonService } from './../common.service';
import { AccountService } from './account.service';
import { catchError, map, Observable, switchMap, throwError } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountInterceptor implements HttpInterceptor {

    constructor(
      private accountService: AccountService,
      private commonService: CommonService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let authreq = request
        if (window.localStorage.getItem('token')) {
          authreq = request.clone({
            setHeaders: {
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
          });
        }

        return next.handle(authreq).pipe(
          catchError(
            (error) => {
              if(error.status === 401 && window.localStorage.getItem('token')) {
                return this.accountService.refreshToken().pipe(
                  switchMap(
                    (response: any) => {
                      window.localStorage.setItem('token', response.token)
                      window.localStorage.setItem('refreshToken', response.refresh_token)

                      if (window.localStorage.getItem('token')) {
                        authreq = request.clone({
                          setHeaders: {
                              Authorization: `Bearer ${window.localStorage.getItem('token')}`
                          }
                        });
                      }

                      return next.handle(authreq)
                    }
                  ),
                  catchError(
                    (error) => {
                      return throwError(error)
                    }
                  )
                )
              }
              return throwError(error)
            }
          )
        )
    }

}
