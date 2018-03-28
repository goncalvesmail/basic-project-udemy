import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../../models/ingredient';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Output() ingredienteAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInputElement: ElementRef;
  @ViewChild('amountInput') amountInputElement: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.ingredienteAdded.emit(
      new Ingredient(
        this.nameInputElement.nativeElement.value, 
        this.amountInputElement.nativeElement.value));
  }

}
