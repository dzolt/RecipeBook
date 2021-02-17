import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() shoppingListClicked = new EventEmitter<null>();
  @Output() recipesClicked = new EventEmitter<null>();

  onShoppingListClicked(): void {
    this.shoppingListClicked.emit();
  }

  onRecipesClicked(): void {
    this.recipesClicked.emit();
  }
}
