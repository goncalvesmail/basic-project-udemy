import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
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
    this.slService.addIngredients(
      new Ingredient(
        this.nameInputElement.nativeElement.value,
        this.amountInputElement.nativeElement.value));
  }

}
