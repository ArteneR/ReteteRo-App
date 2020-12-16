import { Component, HostListener }        from '@angular/core';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.less', './main-nav.component.mobile.less']
})
export class MainNavComponent {
    inside = false;
    isMainNavMenuOpened = false;

    constructor() { }


    logout2() {
        alert("Logout2");
        this.toggleMainNavMenu();
    }


    @HostListener("click") 
    clicked() {
        this.inside = true; 
    } 


    @HostListener("document:click") 
    clickedOut() { 
        if (this.inside) {
            console.log("Inside!");
        }
        else {
            console.log("Outside!");
            this.isMainNavMenuOpened = false;
        }
        this.inside = false; 
    } 


    toggleMainNavMenu() {
        this.isMainNavMenuOpened = !this.isMainNavMenuOpened;
    }
}
