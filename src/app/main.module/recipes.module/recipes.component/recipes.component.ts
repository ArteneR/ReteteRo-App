import { Component, OnInit } from '@angular/core';
import { RECIPES }           from '@app/_mockups/recipes.mockup';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.less', './recipes.component.mobile.less']
})
export class RecipesComponent implements OnInit {
  recipes = RECIPES;

  constructor() { }

  ngOnInit(): void {
  }

}
