import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserEditComponent }    from '@app/main.module/users.module/user-edit.module/user-edit.component/user-edit.component';


const userEditRoutes: Routes = [
  {
    path: '',
    component: UserEditComponent,
    data: {
      breadcrumb: null
    }
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(userEditRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserEditRoutingModule { }