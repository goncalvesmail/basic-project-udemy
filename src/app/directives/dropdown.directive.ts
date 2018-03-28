import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor() {}

  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click') toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  /* Minha implementação foi essa. Funciona mas é menos elegante
  @HostBinding('class') dropdownClassElement: string = '';

  @HostListener('click') toggleMenu() {
    if(this.dropdownClassElement === '') {
      this.dropdownClassElement = 'open';
    } else {
      this.dropdownClassElement = '';
    }
  }*/
}
