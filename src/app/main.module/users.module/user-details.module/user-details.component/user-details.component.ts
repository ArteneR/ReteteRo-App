import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.less']
})
export class UserDetailsComponent implements OnInit {
    userId: number = null;


    constructor(private route: ActivatedRoute) { }


    ngOnInit(): void {
        this.userId = Number(this.route.snapshot.paramMap.get('id'));
    }
}
