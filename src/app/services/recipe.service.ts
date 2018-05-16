import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from '../models/recipe'
import { Ingredient } from '../models/ingredient';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipeChanged = new Subject<Recipe[]>()

  private recipes: Recipe[] = [
    new Recipe('Talharim de abobrinha',
    'Uma deliciosa receita de talharim de abrobrinha',
    'https://abrilclaudia.files.wordpress.com/2017/07/receita-talharim-abobrinha.jpg?quality=85&strip=info',
    [
      new Ingredient('Abobrinha',3),
      new Ingredient('Talharim',1)
    ]),
    new Recipe('Coxinha',
    'Como fazer uma coxinha de galinha',
    'https://www.comidaereceitas.com.br/images/stories/2013/10/coxinha_creme_galinha.jpg',
    [
      new Ingredient('Farinha de trigo',1),
      new Ingredient('Frango desfiado',4),
      new Ingredient('Farinha de rosca',2)
    ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeByName(name: string): Recipe {
    for(let receita of this.recipes) {
      if(receita.name === name) {
        return receita;
      }
    }
  }

  getRecipeById(id: number): Recipe {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
