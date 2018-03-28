import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Tomatoe',10)
  ]

  constructor() { }

  ngOnInit() {
  }

  onIngredienteAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
