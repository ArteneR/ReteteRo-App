import { Component, Input } from '@angular/core';

import { Recipe }           from '@app/_models/recipe';


@Component({
  selector: 'recipe-cooking',
  templateUrl: './recipe-cooking.component.html',
  styleUrls: ['./recipe-cooking.component.less', 'recipe-cooking.component.mobile.less']
})
export class RecipeCookingComponent {
    @Input() recipe: Recipe;
}
