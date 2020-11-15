import { Component }        from '@angular/core';

import { AdminAuthService } from '@app/admin.module/_auth/admin-auth.service';
import { User }             from '@app/_models/user';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent {
    user: User;


    constructor(private adminAuthService: AdminAuthService) {
        this.adminAuthService.user.subscribe(x => this.user = x);
    }

    
    logout() {
        this.adminAuthService.logout();
    }
}
