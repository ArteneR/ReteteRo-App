import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

import { ContactComponent }     from '@app/main.module/contact.module/contact.component/contact.component';
import { ContactRoutingModule } from '@app/main.module/contact.module/contact-routing.module';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
