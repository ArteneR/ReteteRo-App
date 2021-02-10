import { Component, Input } from '@angular/core';

import { Recipe }           from '@app/_models/recipe';


@Component({
  selector: 'recipe-vote-and-share',
  templateUrl: './recipe-vote-and-share.component.html',
  styleUrls: ['./recipe-vote-and-share.component.less']
})
export class RecipeVoteAndShareComponent {
    @Input() recipe: Recipe;
    totalStars = Array(5);
}
