import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.less']
})
export class RecipeDetailsComponent implements OnInit {
    recipeId: number = null;


    constructor(private route: ActivatedRoute) { }


    ngOnInit(): void {
        this.recipeId = Number(this.route.snapshot.paramMap.get('id'));
    }
}
