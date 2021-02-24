import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Citrus aroma schnitzel',
      'This is probably the best schnitzel you have ever eaten',
      'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQOHBxuizZQ-e6yJzIiLuJs_549Wkb20szceJ_o0JyqZxU_DhAb5UapP09idpczPQt3EIidnQfNZYInA9CmTrg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20), new Ingredient('Lemon', 1)]),
    new Recipe(
      'Stew',
      'The prettiest and tastiest stew you can ever make. Go get some beef boy!',
      'https://s23209.pcdn.co/wp-content/uploads/2020/03/Best-Ever-Beef-StewIMG_1367.jpg',
      [new Ingredient('Beef meat', 3), new Ingredient('Beef stock', 1), new Ingredient('Pepper', 1)])
  ];
  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
