import { Component }        from '@angular/core';

import { AuthService }      from '@app/_auth/auth.service';
import { User }             from '@app/_models/user';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent {
    user: User;


    constructor(private authService: AuthService) {
        this.authService.user.subscribe(x => this.user = x);
    }


    logout() {
        this.authService.logout();
    }
}
