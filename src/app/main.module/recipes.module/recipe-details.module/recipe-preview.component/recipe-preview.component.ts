import { Component, Input } from '@angular/core';

import { Recipe }           from '@app/_models/recipe';


@Component({
  selector: 'recipe-preview',
  templateUrl: './recipe-preview.component.html',
  styleUrls: ['./recipe-preview.component.less', 'recipe-preview.component.mobile.less']
})
export class RecipePreviewComponent {
    @Input() recipe: Recipe;
    totalStars = Array(5);
}
