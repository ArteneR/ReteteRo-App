import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent }       from './admin.component/admin.component';


const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminRoutingModule { }
