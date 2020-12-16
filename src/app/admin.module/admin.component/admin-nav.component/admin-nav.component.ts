import { Component, HostListener }        from '@angular/core';


@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.less', './admin-nav.component.mobile.less']
})
export class AdminNavComponent {
    inside = false;
    isAdminNavMenuOpened = false;


    constructor() { }


    logout2() {
        alert("Logout");
        this.toggleAdminNavMenu();
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
            this.isAdminNavMenuOpened = false;
        }
        this.inside = false; 
    } 


    toggleAdminNavMenu() {
        this.isAdminNavMenuOpened = !this.isAdminNavMenuOpened;
    }
}
