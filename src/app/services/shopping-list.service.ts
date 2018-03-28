import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Tomatoe',10)
  ]
  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
