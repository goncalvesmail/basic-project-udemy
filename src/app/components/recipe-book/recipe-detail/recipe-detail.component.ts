import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe';
import { RecipeService } from '../../../services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipe: Recipe;
  selectedRecipeId: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
            private router: Router) { }

  ngOnInit() {
    this.selectedRecipeId = +this.route.snapshot.params['id'];
    this.selectedRecipe = this.recipeService
      .getRecipeById(this.selectedRecipeId);

    this.route.params.subscribe(
      (param: Params) => {
        this.selectedRecipeId = +param['id'];
        this.selectedRecipe = this.recipeService.getRecipeById(this.selectedRecipeId);
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.selectedRecipeId);
    this.router.navigate(['/recipes']);
  }
}
