import { Component, OnInit }  from '@angular/core';
import { first }              from 'rxjs/operators';

import { User }               from '@app/_models/user';
import { ApiService }         from '@app/_services/api.service/api.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
        loading = false;
        users: User[];

        constructor(private apiService: ApiService) { }


        ngOnInit() {
                this.loading = true;
                
                this.apiService.getAllUsers()
                    .pipe(first())
                    .subscribe(
                        users => this.users = users, 
                        error => console.log("ERROR: ", error)
                    );
        }
}
