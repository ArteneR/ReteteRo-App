import { Component, OnInit, Input } from '@angular/core';

import { Recipe }                   from '@app/_models/recipe';


@Component({
  selector: 'recipe-preview',
  templateUrl: './recipe-preview.component.html',
  styleUrls: ['./recipe-preview.component.less']
})
export class RecipePreviewComponent implements OnInit {
    @Input() recipe: Recipe;

    constructor() { }

    ngOnInit(): void {
    }
}
