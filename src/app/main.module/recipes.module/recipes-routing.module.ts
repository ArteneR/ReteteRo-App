import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent }     from '@app/main.module/recipes.module/recipes.component/recipes.component';


const recipesRoutes: Routes = [
  {
    path: '',
    component: RecipesComponent
  },
  {
    path: 'details/:id',
    loadChildren: () => import('@app/main.module/recipes.module/recipe-details.module/recipe-details.module').then(m => m.RecipeDetailsModule)
  },
  {
    path: 'add',
    loadChildren: () => import('@app/main.module/recipes.module/recipe-add.module/recipe-add.module').then(m => m.RecipeAddModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('@app/main.module/recipes.module/recipe-edit.module/recipe-edit.module').then(m => m.RecipeEditModule)
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
