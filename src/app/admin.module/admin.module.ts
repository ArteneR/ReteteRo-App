import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';

import { AdminComponent }             from '@app/admin.module/admin.component/admin.component';
import { AdminRoutingModule }         from '@app/admin.module/admin-routing.module';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: [
    AdminComponent
  ]
})
export class AdminModule { }
