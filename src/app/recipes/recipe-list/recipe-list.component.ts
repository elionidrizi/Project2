import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import index from '@angular/cli';
import {Subscription} from 'rxjs';
import {DataStorageService} from '../../shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {

  recipes: Recipe[];
  onDelete: boolean = false;
  id: number;
  subscription:Subscription;
  term: any;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute, private data:DataStorageService) {
  }

  ngOnInit(): void {
    this.subscription= this.recipeService.recipesChanged
      .subscribe((recipes:Recipe[])=>{
        this.recipes = recipes;
      })
    this.recipes = this.recipeService.getRecipes();
    // this.recipeService.recipesChanged.subscribe(
    //   data => {
    //     this.recipes = data;
    //   }
    // )
  }


  onNewRecipe(): void {
    this.router.navigate(['new'], {relativeTo: this.route});

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
