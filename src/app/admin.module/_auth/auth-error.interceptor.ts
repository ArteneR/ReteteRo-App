import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable }               from '@angular/core';
import { Observable, throwError }   from 'rxjs';
import { catchError }               from 'rxjs/operators';

import { AuthService }              from '@app/admin.module/_auth/auth.service';


@Injectable()
export class AuthErrorInterceptor implements HttpInterceptor {

        constructor(private authService: AuthService) {}

        
        intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
                return next.handle(request).pipe(catchError(err => {
                    if ([401, 403].includes(err.status) && this.authService.userValue) {
                        this.authService.logout();
                    }

                    const error = (err && err.error && err.error.message) || err.statusText;
                    return throwError(error);
                }))
        }
}