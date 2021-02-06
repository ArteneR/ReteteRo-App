import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserAddComponent }     from '@app/main.module/users.module/user-add.module/user-add.component/user-add.component';


const userAddRoutes: Routes = [
  {
    path: '',
    component: UserAddComponent,
    data: {
      breadcrumb: null
    }
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(userAddRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserAddRoutingModule { }