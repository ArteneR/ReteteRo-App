import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent }     from '@app/main.module/contact.module/contact.component/contact.component';


const contactRoutes: Routes = [
  {
    path: '',
    component: ContactComponent,
    data: {
      breadcrumb: null
    }
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(contactRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule { }
