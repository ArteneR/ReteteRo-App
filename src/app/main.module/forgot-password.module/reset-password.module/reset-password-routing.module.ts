import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { RouterModule, Routes }   from '@angular/router';

import { ResetPasswordComponent } from '@app/main.module/forgot-password.module/reset-password.module/reset-password.component/reset-password.component';


const resetPasswordRoutes: Routes = [
  {
    path: '',
    component: ResetPasswordComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(resetPasswordRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ResetPasswordRoutingModule { }