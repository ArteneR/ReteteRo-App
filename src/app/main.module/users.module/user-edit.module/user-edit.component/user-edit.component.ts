import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.less']
})
export class UserEditComponent implements OnInit {
    userId: number = null;


    constructor(private route: ActivatedRoute) { }


    ngOnInit(): void {
        this.userId = Number(this.route.snapshot.paramMap.get('id'));
    }
}
