import { Component, Input, OnInit } from '@angular/core';

import { Recipe }                   from '@app/_models/recipe';
import { FieldsService }            from '@app/_services/fields.service/fields.service';


@Component({
  selector: 'recipe-preview',
  templateUrl: './recipe-preview.component.html',
  styleUrls: ['./recipe-preview.component.less', 'recipe-preview.component.mobile.less']
})
export class RecipePreviewComponent implements OnInit {
    @Input() recipe: Recipe;
    totalStars = Array(5);
    difficultyOptions = {};


    constructor(private fieldsService: FieldsService) { }


    ngOnInit(): void {
        this.difficultyOptions = this.fieldsService.getFieldOptions('difficulty');
    }
}
