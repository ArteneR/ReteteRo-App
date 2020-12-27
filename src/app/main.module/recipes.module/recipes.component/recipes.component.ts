import { Component, OnInit } from '@angular/core';

import { ApiService }        from '@app/_services/api.service/api.service';
import { Recipe }            from '@app/_models/recipe';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.less', './recipes.component.mobile.less']
})
export class RecipesComponent implements OnInit {
        recipes: Recipe[] = [];


        constructor(private apiService: ApiService) { }


        ngOnInit(): void {
                this.getAllRecipes();
        }


        getAllRecipes(): void {
                this.apiService
                    .getAllRecipes()
                    .subscribe(
                        recipes => this.recipes = recipes,
                        error   => console.log("ERROR: ", error)
                    );
        }
}
