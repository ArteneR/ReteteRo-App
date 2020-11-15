import { Component }        from '@angular/core';

import { MainAuthService }  from '@app/main.module/_auth/main-auth.service';
import { User }             from '@app/_models/user';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent {
    user: User;


    constructor(private mainAuthService: MainAuthService) {
        this.mainAuthService.user.subscribe(x => this.user = x);
    }


    logout() {
        this.mainAuthService.logout();
    }
}
