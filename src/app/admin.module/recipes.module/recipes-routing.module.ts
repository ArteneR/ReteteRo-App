import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent }     from '@app/admin.module/recipes.module/recipes.component/recipes.component';


const recipesRoutes: Routes = [
  {
    path: '',
    component: RecipesComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecipesRoutingModule { }
