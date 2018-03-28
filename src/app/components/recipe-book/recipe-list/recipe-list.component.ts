import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output()
  detailRecipeClicked = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Receita teste','Apenas um testes para ver se esta ok',
    'https://abrilclaudia.files.wordpress.com/2017/07/receita-talharim-abobrinha.jpg?quality=85&strip=info'),
    new Recipe('Coxinha','Como fazer uma coxinha de galinha',
    'https://www.comidaereceitas.com.br/images/stories/2013/10/coxinha_creme_galinha.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  recipeClicked(recipe: Recipe) {
    console.log('onRecipeListClick '+recipe.name);
    this.detailRecipeClicked.emit(recipe);
  }

}
