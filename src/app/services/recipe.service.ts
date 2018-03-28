import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from '../models/recipe'

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Receita teste','Apenas um testes para ver se esta ok',
    'https://abrilclaudia.files.wordpress.com/2017/07/receita-talharim-abobrinha.jpg?quality=85&strip=info'),
    new Recipe('Coxinha','Como fazer uma coxinha de galinha',
    'https://www.comidaereceitas.com.br/images/stories/2013/10/coxinha_creme_galinha.jpg')
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
