import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ForgotPasswordComponent }     from '@app/main.module/forgot-password.module/forgot-password.component/forgot-password.component';


const forgotPasswordRoutes: Routes = [
  {
    path: '',
    component: ForgotPasswordComponent
  },
  {
    path: 'reset-password',
    loadChildren: () => import('@app/main.module/forgot-password.module/reset-password.module/reset-password.module').then(m => m.ResetPasswordModule)
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
