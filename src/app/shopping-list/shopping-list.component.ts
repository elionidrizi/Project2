import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private igChangeSub: Subscription;
  filteredArray: number[];
  isClicked = false;

  constructor(private slService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.filteredArray = [];
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);

  }

  onSelected(data: any) {
    if (data.target.checked) {
      if (!this.filteredArray.includes(+data.target.value)) {
        this.filteredArray.push(+data.target.value);
      } else {
        return;
      }
    } else if (!data.target.checked) {
      if (this.filteredArray.includes(+data.target.value)) {
        this.filteredArray.splice(this.filteredArray.indexOf(+data.target.value), 1);
      } else {
        return;
      }
    }
  }

  deleteSelectedIngredients() {
    this.slService.deleteSelectedIngrediets(this.filteredArray);
  }

  onClick() {
    this.isClicked = true;
  }

}
