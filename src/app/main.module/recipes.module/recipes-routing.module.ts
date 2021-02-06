import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent }     from '@app/main.module/recipes.module/recipes.component/recipes.component';


const recipesRoutes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    data: {
      breadcrumb: null
    }
  },
  {
    path: 'details/:id',
    loadChildren: () => import('@app/main.module/recipes.module/recipe-details.module/recipe-details.module').then(m => m.RecipeDetailsModule),
    data: {
      breadcrumb: 'Recipe Details'
    }
  },
  {
    path: 'add',
    loadChildren: () => import('@app/main.module/recipes.module/recipe-add.module/recipe-add.module').then(m => m.RecipeAddModule),
    data: {
      breadcrumb: 'Add Recipe'
    }
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('@app/main.module/recipes.module/recipe-edit.module/recipe-edit.module').then(m => m.RecipeEditModule),
    data: {
      breadcrumb: 'Edit Recipe'
    }
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
