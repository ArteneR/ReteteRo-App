import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent }        from './main.component/main.component';


const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class MainRoutingModule { }
