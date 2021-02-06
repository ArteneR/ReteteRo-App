import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailsComponent } from '@app/main.module/users.module/user-details.module/user-details.component/user-details.component';


const userDetailsRoutes: Routes = [
  {
    path: '',
    component: UserDetailsComponent,
    data: {
      breadcrumb: null
    }
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(userDetailsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserDetailsRoutingModule { }