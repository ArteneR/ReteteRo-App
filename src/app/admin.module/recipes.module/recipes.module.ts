import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

import { RecipesComponent }     from '@app/admin.module/recipes.module/recipes.component/recipes.component';
import { RecipesRoutingModule } from '@app/admin.module/recipes.module/recipes-routing.module';


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
