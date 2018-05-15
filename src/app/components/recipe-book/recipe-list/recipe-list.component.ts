import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../../models/recipe';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        console.log('atualiza')
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }

}
