import { Component, Input }         from '@angular/core';

import { AvailableRecipeCategory }  from '@app/_models/available-recipe-category';
import { Recipe }                   from '@app/_models/recipe';


@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.less', './recipe-card.component.tablet.less', './recipe-card.component.mobile.less']
})
export class RecipeCardComponent {
    @Input() recipe: Recipe;
    @Input() availableRecipeCategories: AvailableRecipeCategory[];
    totalStars = Array(5);
}
