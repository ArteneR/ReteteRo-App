import { NgModule }                    from '@angular/core';
import { CommonModule }                from '@angular/common';

import { AngularSvgIconModule }        from 'angular-svg-icon';
import { AngularMaterialModule }       from '@app/_core/angular-material.module.ts';
import { ImageFallbackModule }         from '@app/_modules/image-fallback.module/image-fallback.module';
import { SectionTitleModule }          from '@app/_modules/section-title.module/section-title.module';
import { SocialMediaShareModule }      from '@app/_modules/social-media-share.module/social-media-share.module';
import { RecipeDetailsRoutingModule }  from '@app/main.module/recipes.module/recipe-details.module/recipe-details-routing.module';
import { RecipeDetailsComponent }      from '@app/main.module/recipes.module/recipe-details.module/recipe-details.component/recipe-details.component';
import { RecipePreviewComponent }      from '@app/main.module/recipes.module/recipe-details.module/recipe-preview.component/recipe-preview.component';
import { RecipeCookingComponent }      from '@app/main.module/recipes.module/recipe-details.module/recipe-cooking.component/recipe-cooking.component';
import { RecipeVoteAndShareComponent } from '@app/main.module/recipes.module/recipe-details.module/recipe-vote-and-share.component/recipe-vote-and-share.component';
import { RecipeCommentsComponent }     from '@app/main.module/recipes.module/recipe-details.module/recipe-comments.component/recipe-comments.component';
import { RecipeSimilarComponent }      from '@app/main.module/recipes.module/recipe-details.module/recipe-similar.component/recipe-similar.component';
import { RecipeRecommendedComponent }  from '@app/main.module/recipes.module/recipe-details.module/recipe-recommended.component/recipe-recommended.component';


@NgModule({
  declarations: [
    RecipeDetailsComponent,
    RecipePreviewComponent,
    RecipeCookingComponent,
    RecipeVoteAndShareComponent,
    RecipeCommentsComponent,
    RecipeSimilarComponent,
    RecipeRecommendedComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    RecipeDetailsRoutingModule,
    AngularMaterialModule,
    ImageFallbackModule,
    SectionTitleModule,
    SocialMediaShareModule
  ]
})
export class RecipeDetailsModule { }