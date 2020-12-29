import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { RouterModule, Routes }   from '@angular/router';

import { RecipeDetailsComponent } from '@app/main.module/recipes.module/recipe-details.module/recipe-details.component/recipe-details.component';


const recipeDetailsRoutes: Routes = [
  {
    path: '',
    component: RecipeDetailsComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(recipeDetailsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecipeDetailsRoutingModule { }