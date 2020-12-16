import { Component, HostListener }        from '@angular/core';


@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.less', './admin-nav.component.mobile.less']
})
export class AdminNavComponent {
    clickedInsideAdminNavMenu = false;
    isAdminNavMenuOpened = false;


    constructor() { }


    logout2() {
        alert("Logout");
        this.toggleAdminNavMenu();
    }

    
    @HostListener("click") 
    clicked() {
        this.clickedInsideAdminNavMenu = true; 
    } 


    @HostListener("document:click") 
    clickedOut() { 
        if (!this.clickedInsideAdminNavMenu) {
            this.isAdminNavMenuOpened = false;
        }
        
        this.clickedInsideAdminNavMenu = false; 
    } 


    toggleAdminNavMenu() {
        this.isAdminNavMenuOpened = !this.isAdminNavMenuOpened;
    }
}
