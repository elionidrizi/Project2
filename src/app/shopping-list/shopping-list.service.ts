import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]): void {
    // for(let ingredient of ingredient){
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());

  }

  // deleteIngredient(index: number) {
  //   this.ingredients.splice(index,1);
  //   this.ingredientsChanged.next(this.ingredients.slice());
  // }

  deleteSelectedIngrediets(selectedIndexes: number[]) {
    // this.ingredients = this.ingredients.filter((ingredient, index) => {
    //   this.ingredients.find(i => {i == indexes}) == null
    // });

    this.ingredients = this.ingredients.filter((i: Ingredient, index: number) => {
      let foundIndex = selectedIndexes.find(si => {
        if(si == index){
          return true;
        }
        return false;
      });

      if(foundIndex == null){
        return true;
      }else {
        return false;
      }
    });
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
