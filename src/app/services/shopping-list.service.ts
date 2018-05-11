import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  startEdditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Tomatoe',10)
  ]
  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]) {
    //Operador spread utilizado para transformar o array em uma lista
    //para que o push possa colocar cada item no array
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.getIngredients());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.getIngredients().slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index,1);
    this.ingredientChanged.next(this.getIngredients().slice());
  }
}
