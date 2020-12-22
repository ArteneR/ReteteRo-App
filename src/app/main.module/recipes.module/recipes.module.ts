import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

import { RecipesComponent }     from '@app/main.module/recipes.module/recipes.component/recipes.component';
import { RecipesRoutingModule } from '@app/main.module/recipes.module/recipes-routing.module';
import { RecipeCardComponent }  from '@app/main.module/recipes.module/recipes.component/recipe-card.component/recipe-card.component';


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeCardComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
