import { Component, OnInit }  from '@angular/core';
import { first }              from 'rxjs/operators';

import { User }               from '@app/_models/user';
import { UserService }        from '@app/_services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
        loading = false;
        users: User[];

        constructor(private userService: UserService) { }

        ngOnInit() {
                this.loading = true;
                
                this.userService.getAll().pipe(first()).subscribe(response => {
                    this.loading = false;
                    if (response && response.data) {
                        this.users = response.data;
                    } 
                });
        }
}
