import { NgModule }                    from '@angular/core';
import { CommonModule }                from '@angular/common';

import { ForgotPasswordComponent }     from '@app/main.module/forgot-password.module/forgot-password.component/forgot-password.component';
import { ForgotPasswordRoutingModule } from '@app/main.module/forgot-password.module/forgot-password-routing.module';


@NgModule({
  declarations: [
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule
  ]
})
export class ForgotPasswordModule { }
