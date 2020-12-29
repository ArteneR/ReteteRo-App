import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';

import { UserDetailsRoutingModule } from '@app/main.module/users.module/user-details.module/user-details-routing.module';
import { UserDetailsComponent }     from '@app/main.module/users.module/user-details.module/user-details.component/user-details.component';


@NgModule({
  declarations: [
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserDetailsRoutingModule
  ]
})
export class UserDetailsModule { }