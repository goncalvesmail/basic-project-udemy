import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../../models/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input()
  selectedRecipe: Recipe;

  @Output()
  recipeClicked = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeClick() {
    console.log('onRecipeItemClick');
    this.recipeClicked.emit();
  }

}
