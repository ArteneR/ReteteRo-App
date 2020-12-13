import { Injectable }                   from '@angular/core';
import { HttpClient }                   from '@angular/common/http';
import { Router }                       from '@angular/router';
import { BehaviorSubject, Observable }  from 'rxjs';
import { map }                          from 'rxjs/operators';

import { environment }                  from '@environments/environment';
import { User }                         from '@app/_models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
        private refreshTokenTimeout;
        private userSubject: BehaviorSubject<User>;
        public  user: Observable<User>;


        constructor(private httpClient: HttpClient, private router: Router) {
                this.userSubject = new BehaviorSubject<User>(null);
                this.user = this.userSubject.asObservable();
        }


        login(username: string, password: string) {
                return this.httpClient.post<any>(`${environment.apiUrl}/auth/login`, { username, password }, { withCredentials: false })
                        .pipe(map(response => {
                                let user = response && response.data;
                                this.userSubject.next(user);
                                this.saveUserMetadata(user);
                                this.saveAccessToken();
                                this.startRefreshTokenTimer();
                                return user;
                        }));
        }


        logout() {
                this.httpClient.post<any>(`${environment.apiUrl}/auth/logout`, {}, { withCredentials: false }).subscribe();
                this.userSubject.next(null);
                this.stopRefreshTokenTimer();
                this.removeAccessToken();
                this.removeUserMetadata();
                this.router.navigate(['/login']);
        }


        refreshToken() {
                return this.httpClient.post<any>(`${environment.apiUrl}/auth/refresh-token`, {}, { withCredentials: false })
                        .pipe(map((response) => {
                                if (response && (response.status == 'fail')) {
                                        this.removeAccessToken();
                                        return null;
                                }
                                let user = response && response.data;
                                this.userSubject.next(user);
                                this.saveUserMetadata(user);
                                this.saveAccessToken();
                                this.startRefreshTokenTimer();
                                return user;
                        }));
        }


        public get userValue(): User {
                return this.userSubject.value;
        }


        private startRefreshTokenTimer() {
                if (!this.userValue || !this.userValue.accessToken) {
                        return false;
                }

                // Stop previous refresh token timer
                this.stopRefreshTokenTimer();

                const jwtToken = JSON.parse(atob(this.userValue.accessToken.jwt.split('.')[1]));
                const expires = new Date(jwtToken.exp * 1000);
                const timeout = expires.getTime() - Date.now() - (60 * 1000);

                this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
        }

        
        private stopRefreshTokenTimer() {
                clearTimeout(this.refreshTokenTimeout);
        }


        private saveAccessToken() {
                const accessToken = this.userValue ? this.userValue.accessToken : null;
                
                if (accessToken) {
                        localStorage.setItem('accessToken', JSON.stringify(accessToken));
                }
        }


        private removeAccessToken() {
                localStorage.removeItem('accessToken');
        }


        private saveUserMetadata(user) {
                if (user) {
                        localStorage.setItem('userMetadata', JSON.stringify(user));
                }
        }


        private removeUserMetadata() {
                localStorage.removeItem('userMetadata');
        }
}
