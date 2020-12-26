import { Component, OnInit, Input } from '@angular/core';
import { Recipe }                   from '@app/_models/recipe';


@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.less', './recipe-card.component.tablet.less', './recipe-card.component.mobile.less']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: Recipe;
  totalStars = Array(5);


  constructor() { }

  ngOnInit(): void {
  }

}
