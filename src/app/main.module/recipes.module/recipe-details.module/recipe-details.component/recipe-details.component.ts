import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { ApiService }        from '@app/_services/api.service/api.service';
import { Recipe }            from '@app/_models/recipe';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.less']
})
export class RecipeDetailsComponent implements OnInit {
    recipeId: number = null;
    recipe: Recipe;


    constructor(private route: ActivatedRoute, private apiService: ApiService) { }


    ngOnInit(): void {
        this.recipeId = Number(this.route.snapshot.paramMap.get('id'));
        this.getRecipe(this.recipeId);
    }


    getRecipe(recipeId): void {
        this.apiService
            .getRecipeById(recipeId)
            .subscribe(
                recipe => this.recipe = recipe,
                error   => console.log("ERROR: ", error)
            );
    }
}
