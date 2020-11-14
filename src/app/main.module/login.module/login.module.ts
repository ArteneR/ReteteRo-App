import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';

import { LoginComponent }     from '@app/main.module/login.module/login.component/login.component';
import { LoginRoutingModule } from '@app/main.module/login.module/login-routing.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
