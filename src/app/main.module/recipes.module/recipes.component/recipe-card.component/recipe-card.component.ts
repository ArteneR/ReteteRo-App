import { Component, Input, OnInit } from '@angular/core';

import { AvailableRecipeCategory }  from '@app/_models/available-recipe-category';
import { Recipe }                   from '@app/_models/recipe';
import { FieldsService }            from '@app/_services/fields.service/fields.service';


@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.less', './recipe-card.component.tablet.less', './recipe-card.component.mobile.less']
})
export class RecipeCardComponent implements OnInit {
    @Input() recipe: Recipe;
    @Input() availableRecipeCategories: AvailableRecipeCategory[];
    totalStars         = Array(5);
    difficultyOptions  = {};


    constructor(private fieldsService: FieldsService) { }


    ngOnInit(): void {
        this.difficultyOptions = this.fieldsService.getFieldOptions('difficulty');
    }
}
