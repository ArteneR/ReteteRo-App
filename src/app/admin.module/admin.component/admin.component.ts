import { Component }    from '@angular/core';

import { AuthService }  from '@app/admin.module/_auth/auth.service';
import { User }         from '@app/_models/user';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent {
    user: User;


    constructor(private authService: AuthService) {
        this.authService.user.subscribe(x => this.user = x);
    }

    
    logout() {
        this.authService.logout();
    }
}
