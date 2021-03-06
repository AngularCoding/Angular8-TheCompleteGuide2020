import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { from, Subject } from "rxjs";
import { Store } from "@ngrx/store";
import * as ShoppingListActions from "../shopping-list/store/shopping-list.actions";
import * as fromApp from "../store/app.reducer";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];

  // private recipes: Recipe[] = [
  //   new Recipe('Asian salmon',
  //     'Asian-inspired salmon recipe.',
  //     'https://realfood.tesco.com/media/images/RFO-1400x919-AsianSalmon-9a9cf566-eaad-4107-aa79-886ec53e6b31-0-1400x919.jpg',
  //     [
  //                 new Ingredient('Meat', 1),
  //                 new Ingredient('French Fries', 2)
  //               ]),
  //   new Recipe('Test Recipe',
  //     'This is test only',
  //     'https://cdn.pixabay.com/photo/2018/09/14/11/13/food-3676808_1280.jpg',
  //     [
  //                 new Ingredient('Olsas', 11),
  //                 new Ingredient('Madee', 22)
  //               ]),
  //   new Recipe('Test Recipe',
  //     'This is test only',
  //     'https://hemosite.com/wp-content/uploads/2019/11/best-tapas-in-madrid-bars-restaurants.jpg',
  //     [
  //                 new Ingredient('Olsas', 11),
  //                 new Ingredient('Madee', 22)
  //               ]),
  //
  // ];

  constructor(private store: Store<fromApp.AppState>) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // this.slService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
