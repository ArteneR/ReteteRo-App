import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';

import { ResetPasswordRoutingModule } from '@app/main.module/forgot-password.module/reset-password.module/reset-password-routing.module';
import { ResetPasswordComponent }     from '@app/main.module/forgot-password.module/reset-password.module/reset-password.component/reset-password.component';


@NgModule({
  declarations: [
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule
  ]
})
export class ResetPasswordModule { }