import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  onChangeMenu = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  shoppinglistClicked() {
    this.onChangeMenu.emit('listMenu');
  }

  recipeClicked() {
    this.onChangeMenu.emit('recipeMenu');
  }
}
