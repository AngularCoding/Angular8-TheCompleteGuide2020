import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

export enum ShoppingListActionsTypes {
  AddIngredient = '[Shopping List] Add Ingredient',
  AddIngredients = '[Shopping List] Add Ingredients',
  UpdateIngredient = '[Shopping List] Update Ingredient',
  DeleteIngredient = '[Shopping List] Delete Ingredients',
  StartEdit = '[Shopping List] Start Edit',
  StopEdit = '[Shopping List] Stop Edit'
}

export class AddIngredient implements Action {
  readonly type = ShoppingListActionsTypes.AddIngredient;
  constructor(public payload: Ingredient) {}
}

export class AddIngredients implements Action {
  readonly type = ShoppingListActionsTypes.AddIngredients;
  constructor(public payload: Ingredient[]) {}
}

export class UpdateIngredient implements Action {
  readonly type = ShoppingListActionsTypes.UpdateIngredient;
  constructor(public payload: Ingredient) {}
}

export class DeleteIngredient implements Action {
  readonly type = ShoppingListActionsTypes.DeleteIngredient;
}

export class StartEdit implements Action {
  readonly type = ShoppingListActionsTypes.StartEdit;
  constructor(public payload: number) {}
}

export class StopEdit implements Action {
  readonly type = ShoppingListActionsTypes.StopEdit;
}

export type ShoppingListActions =
  | AddIngredient
  | AddIngredients
  | UpdateIngredient
  | DeleteIngredient
  | StartEdit
  | StopEdit;
