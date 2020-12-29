import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

import { CategoriesComponent }     from '@app/main.module/categories.module/categories.component/categories.component';
import { CategoriesRoutingModule } from '@app/main.module/categories.module/categories-routing.module';


@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
