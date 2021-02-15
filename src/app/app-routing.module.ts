import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {JokesComponent} from './jokes/jokes.component';
import {MemeComponent} from './meme/meme.component';


const appRoutes: Routes =
  [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {
      path: 'recipes',
      loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)
    },
    {
      path: 'ShoppingList', loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule)
    },
    {
      path:'jokes',component:JokesComponent
    },
    {
      path:'memes',component: MemeComponent
    }

  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
