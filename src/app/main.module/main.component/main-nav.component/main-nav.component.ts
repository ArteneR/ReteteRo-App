import { Component, HostListener }        from '@angular/core';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.less', './main-nav.component.mobile.less']
})
export class MainNavComponent {
    clickedInsideMainNavMenu = false;
    isMainNavMenuOpened = false;

    constructor() { }


    logout2() {
        alert("Logout2");
        this.toggleMainNavMenu();
    }


    @HostListener("click") 
    clicked() {
        this.clickedInsideMainNavMenu = true; 
    } 


    @HostListener("document:click") 
    clickedOut() { 
        if (!this.clickedInsideMainNavMenu) {
            this.isMainNavMenuOpened = false;
        }
        
        this.clickedInsideMainNavMenu = false; 
    } 


    toggleMainNavMenu() {
        this.isMainNavMenuOpened = !this.isMainNavMenuOpened;
    }
}
