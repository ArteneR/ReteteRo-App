import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

import { RecipesComponent }     from './recipes.component/recipes.component';
import { RecipesRoutingModule } from './recipes-routing.module';


@NgModule({
  declarations: [
    RecipesComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
