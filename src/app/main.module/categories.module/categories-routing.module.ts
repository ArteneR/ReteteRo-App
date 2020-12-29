import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesComponent }  from '@app/main.module/categories.module/categories.component/categories.component';


const categoriesRoutes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(categoriesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CategoriesRoutingModule { }
