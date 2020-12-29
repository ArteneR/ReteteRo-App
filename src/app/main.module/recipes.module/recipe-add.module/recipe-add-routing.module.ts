import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RecipeAddComponent }   from '@app/main.module/recipes.module/recipe-add.module/recipe-add.component/recipe-add.component';


const recipeAddRoutes: Routes = [
  {
    path: '',
    component: RecipeAddComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(recipeAddRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecipeAddRoutingModule { }