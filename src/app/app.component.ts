import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipesClicked = true;

  handleShoppingListClicked(): void {
    this.recipesClicked = false;
  }

  handleRecipesClicked(): void {
    this.recipesClicked = true;
  }
}
