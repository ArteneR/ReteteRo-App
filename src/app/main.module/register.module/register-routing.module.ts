import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent }    from '@app/main.module/register.module/register.component/register.component';


const registerRoutes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    data: {
      breadcrumb: null
    }
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(registerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RegisterRoutingModule { }
