import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../models/recipe';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() { }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
  }
}
