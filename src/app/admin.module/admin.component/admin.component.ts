import { Component }        from '@angular/core';

import { AuthService }      from '@app/_auth/auth.service';
import { User }             from '@app/_models/user';
import { UtilsService }     from '@app/_services/utils.service/utils.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less', './admin.component.mobile.less']
})
export class AdminComponent {
    user: User;
    copyrightText: string;


    constructor(private authService: AuthService, private utilsService: UtilsService) {
        this.authService.user.subscribe(x => this.user = x);
        this.copyrightText = utilsService.generateCopyrightText();
    }

    
    logout() {
        this.authService.logout();
    }
}
