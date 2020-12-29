import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';

import { RegisterComponent }     from '@app/main.module/register.module/register.component/register.component';
import { RegisterRoutingModule } from '@app/main.module/register.module/register-routing.module';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
