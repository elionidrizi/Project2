import {Component, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DataStorageService} from '../../shared/data-storage.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  openMenu: boolean;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router,private data:DataStorageService) {
  }

  ngOnInit(): void {
    // this.openMenu = false;
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'] as number;
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }


  // toggleOpen(): void{
  //   this.openMenu = !this.openMenu;
  // }

  onAddToShoppingList(): void {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../',this.id,'edit'], {relativeTo:this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'],{relativeTo: this.route});
    if (confirm('Are you sure you wanna delete this item?')){
      this.data.storeRecipes();
    }else{
      return null;
    }

  }
}
