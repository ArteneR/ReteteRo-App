import { Component }        from '@angular/core';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.less', './main-nav.component.mobile.less']
})
export class MainNavComponent {
    constructor() { }


    logout2() {
        alert("Logout2");
    }
}
