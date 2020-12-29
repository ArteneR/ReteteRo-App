import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';

import { RecipeDetailsRoutingModule } from '@app/main.module/recipes.module/recipe-details.module/recipe-details-routing.module';
import { RecipeDetailsComponent }     from '@app/main.module/recipes.module/recipe-details.module/recipe-details.component/recipe-details.component';


@NgModule({
  declarations: [
    RecipeDetailsComponent
  ],
  imports: [
    CommonModule,
    RecipeDetailsRoutingModule
  ]
})
export class RecipeDetailsModule { }