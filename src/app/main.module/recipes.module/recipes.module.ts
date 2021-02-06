import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';

import { AngularSvgIconModule }  from 'angular-svg-icon';
import { AngularMaterialModule } from '@app/_core/angular-material.module.ts';
import { SectionTitleModule }    from '@app/_modules/section-title.module/section-title.module';
import { RecipesComponent }      from '@app/main.module/recipes.module/recipes.component/recipes.component';
import { RecipesRoutingModule }  from '@app/main.module/recipes.module/recipes-routing.module';
import { RecipeCardComponent }   from '@app/main.module/recipes.module/recipes.component/recipe-card.component/recipe-card.component';


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeCardComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    AngularSvgIconModule,
    AngularMaterialModule,
    SectionTitleModule
  ]
})
export class RecipesModule { }
