import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';

import { UserEditRoutingModule } from '@app/main.module/users.module/user-edit.module/user-edit-routing.module';
import { UserEditComponent }     from '@app/main.module/users.module/user-edit.module/user-edit.component/user-edit.component';


@NgModule({
  declarations: [
    UserEditComponent
  ],
  imports: [
    CommonModule,
    UserEditRoutingModule
  ]
})
export class UserEditModule { }