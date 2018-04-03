import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe';
import { RecipeService } from '../../../services/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const recipeName: string = this.route.snapshot.params['name'];
    this.selectedRecipe = this.recipeService.getRecipe(recipeName);

    this.route.params.subscribe(
      (param: Params) => {
        this.selectedRecipe = this.recipeService.getRecipe(param['name']);
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
  }
}
