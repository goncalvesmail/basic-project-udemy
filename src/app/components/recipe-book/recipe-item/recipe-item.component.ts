import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../models/recipe';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  @Input() selectedRecipeId: number;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

}
