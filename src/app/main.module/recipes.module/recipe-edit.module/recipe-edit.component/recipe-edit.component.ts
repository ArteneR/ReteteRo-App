import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.less']
})
export class RecipeEditComponent implements OnInit {
    recipeId: number = null;


    constructor(private route: ActivatedRoute) { }


    ngOnInit(): void {
        this.recipeId = Number(this.route.snapshot.paramMap.get('id'));
    }
}
