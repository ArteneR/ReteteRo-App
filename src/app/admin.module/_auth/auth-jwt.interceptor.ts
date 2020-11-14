import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable }       from '@angular/core';
import { Observable }       from 'rxjs';

import { environment }      from '@environments/environment';
import { AuthService }      from '@app/admin.module/_auth/auth.service';


@Injectable()
export class AuthJwtInterceptor implements HttpInterceptor {

        constructor(private authService: AuthService) { }


        intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
                const accessTokenRaw = localStorage.getItem('accessToken');
                const accessToken    = accessTokenRaw ? JSON.parse(accessTokenRaw) : null;
                const isApiUrl       = request.url.startsWith(environment.apiUrl);

                if (accessToken && isApiUrl) {
                    request = request.clone({
                        setHeaders: { Authorization: `Bearer ${accessToken.jwt}` }
                    });
                }

                return next.handle(request);
        }
}