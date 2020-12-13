import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable }       from '@angular/core';

import { AuthService }      from '@app/_auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
        constructor(private authService: AuthService, private router: Router) { };


        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
                const user = this.authService.userValue;

                if (this.isAdminRoute(state.url)) {
                    if (user && this.isAdmin(user)) {
                        return true;
                    }

                    this.router.navigate(['/admin/login'], { queryParams: { returnUrl: state.url } });
                } 
                else {
                    if (user) {
                        return true;
                    }

                    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                }

                return false;
        }


        canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
                return this.canActivate(route, state);
        }


        isAdminRoute(url: string): boolean {
                return url && url.indexOf('/admin') > -1;
        }


        isAdmin(user) {
                return user && user.roles.indexOf('admin') > -1;
        }
}
