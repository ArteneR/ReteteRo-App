import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

import { UsersComponent }     from '@app/main.module/users.module/users.component/users.component';
import { UsersRoutingModule } from '@app/main.module/users.module/users-routing.module';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
