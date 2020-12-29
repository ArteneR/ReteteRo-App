import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RecipeEditComponent }  from '@app/main.module/recipes.module/recipe-edit.module/recipe-edit.component/recipe-edit.component';


const recipeEditRoutes: Routes = [
  {
    path: '',
    component: RecipeEditComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(recipeEditRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecipeEditRoutingModule { }