import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';

import { RecipeAddRoutingModule } from '@app/main.module/recipes.module/recipe-add.module/recipe-add-routing.module';
import { RecipeAddComponent }     from '@app/main.module/recipes.module/recipe-add.module/recipe-add.component/recipe-add.component';


@NgModule({
  declarations: [
    RecipeAddComponent
  ],
  imports: [
    CommonModule,
    RecipeAddRoutingModule
  ]
})
export class RecipeAddModule { }