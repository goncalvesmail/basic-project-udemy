import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient';

@Injectable()
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Tomatoe',10)
  ]
  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]) {
    //Operador spread utilizado para transformar o array em uma lista
    //para que o push possa colocar cada item no array
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.getIngredients());
  }
}
