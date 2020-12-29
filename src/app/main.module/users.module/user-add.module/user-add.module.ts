import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

import { UserAddRoutingModule } from '@app/main.module/users.module/user-add.module/user-add-routing.module';
import { UserAddComponent }     from '@app/main.module/users.module/user-add.module/user-add.component/user-add.component';


@NgModule({
  declarations: [
    UserAddComponent
  ],
  imports: [
    CommonModule,
    UserAddRoutingModule
  ]
})
export class UserAddModule { }