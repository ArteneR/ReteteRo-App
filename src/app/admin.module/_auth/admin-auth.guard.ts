import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable }       from '@angular/core';

import { AdminAuthService } from '@app/admin.module/_auth/admin-auth.service';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate, CanActivateChild {

    constructor(private adminAuthService: AdminAuthService, private router: Router) { };


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.adminAuthService.userValue;
        if (user) {
            return true;
        } 
        else {
            this.router.navigate(['/admin/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }


    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
}