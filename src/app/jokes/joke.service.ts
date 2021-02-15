import {Injectable, OnChanges, SimpleChanges} from '@angular/core';
import {FormGroup} from '@angular/forms';


@Injectable({providedIn: 'root'})
export class JokeService{
 constructor() {
 }
  categoryList: string[] = ['Programming', 'Misc', 'Dark', 'Pun', 'Spooky', 'Christmas'];
  flagsList: string[] = ['nsfw', 'religious', 'political', 'racist', 'sexist', 'explicit'];
  jokeTypeList: string[] = ['single', 'twopart'];
  categoriesChanged = [];
  jokeTypeChanged = [];
  flagsChanged = [];
  containsChanged = '';
  amountChanged = 0;
  url: string;




}
