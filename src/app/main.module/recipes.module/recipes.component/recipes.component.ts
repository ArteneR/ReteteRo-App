import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.less']
})
export class RecipesComponent implements OnInit {
  items = [1, 2, 3];

  constructor() { }

  ngOnInit(): void {
  }

}
