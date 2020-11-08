import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent }     from './contact.component/contact.component';


const contactRoutes: Routes = [
  {
    path: '',
    component: ContactComponent
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
