import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ForgotPasswordComponent }     from '@app/main.module/forgot-password.module/forgot-password.component/forgot-password.component';


const forgotPasswordRoutes: Routes = [
  {
    path: '',
    component: ForgotPasswordComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(forgotPasswordRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ForgotPasswordRoutingModule { }
