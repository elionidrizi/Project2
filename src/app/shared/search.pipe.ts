import {Pipe, PipeTransform} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:Array<Recipe>, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter(s => s.name.toLowerCase().startsWith(args.toLowerCase()));

  }

}
