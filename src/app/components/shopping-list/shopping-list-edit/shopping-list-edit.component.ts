import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../../models/ingredient';
import { ShoppingListService } from '../../../services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedIngredient: Ingredient;
  @ViewChild('f') slForm: NgForm;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startEdditing
      .subscribe(
        (index: number) => {
          this.editMode=true;
          this.editedItemIndex=index;
          this.editedIngredient = this.slService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedIngredient.name,
            amount: this.editedIngredient.amount
          });
        }
      );
  }

  onSubmit(f: NgForm) {
    const value = f.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if(this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex,newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.onClearForm();
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClearForm();
  }

  onClearForm() {
    this.editMode = false;
    this.slForm.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
