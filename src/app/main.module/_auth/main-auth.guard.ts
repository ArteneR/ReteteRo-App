import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable }       from '@angular/core';

import { MainAuthService } from '@app/main.module/_auth/main-auth.service';


@Injectable({
  providedIn: 'root'
})
export class MainAuthGuard implements CanActivate, CanActivateChild {

    constructor(private mainAuthService: MainAuthService, private router: Router) { };


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.mainAuthService.userValue;
        if (user) {
            return true;
        } 
        else {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }


    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
}