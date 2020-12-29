import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';

import { RecipeEditRoutingModule } from '@app/main.module/recipes.module/recipe-edit.module/recipe-edit-routing.module';
import { RecipeEditComponent }     from '@app/main.module/recipes.module/recipe-edit.module/recipe-edit.component/recipe-edit.component';


@NgModule({
  declarations: [
    RecipeEditComponent
  ],
  imports: [
    CommonModule,
    RecipeEditRoutingModule
  ]
})
export class RecipeEditModule { }