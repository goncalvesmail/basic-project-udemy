import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../../models/ingredient';
import { ShoppingListService } from '../../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputElement: ElementRef;
  @ViewChild('amountInput') amountInputElement: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.slService.addIngredient(
      new Ingredient(
        this.nameInputElement.nativeElement.value,
        this.amountInputElement.nativeElement.value));
  }

}
