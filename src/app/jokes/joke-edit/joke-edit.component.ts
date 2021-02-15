import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {JokeStorageService} from '../joke-storage.service';
import {JokeService} from '../joke.service';
import {HttpClient} from '@angular/common/http';
import {Joke} from '../joke-amount.model';
import {SingleJokeModel} from '../single-joke.model';

@Component({
  selector: 'app-joke-edit',
  templateUrl: './joke-edit.component.html',
  styleUrls: ['./joke-edit.component.css']
})
export class JokeEditComponent implements OnInit {
  // categoryList: string[] = ['Programming', 'Misc', 'Dark', 'Pun', 'Spooky', 'Christmas'];
  // flagsList: string[] = ['nsfw', 'religious', 'political', 'racist', 'sexist', 'explicit'];
  // jokeTypeList: string[] = ['single', 'twopart'];
  // jokeForm: FormGroup;
  // categoriesChanged = [];
  // jokeTypeChanged = [];
  // flagsChanged = [];
  // containsChanged = '';
  // amountChanged = 0;
  //   url: string;

  categoryList = this.jokeService.categoryList;
  flagsList = this.jokeService.flagsList;
  jokeTypeList = this.jokeService.jokeTypeList;
  jokeForm: FormGroup;
  categoriesChanged = this.jokeService.categoriesChanged;
  jokeTypeChanged = this.jokeService.jokeTypeChanged;
  flagsChanged = this.jokeService.flagsChanged;
  containsChanged = this.jokeService.containsChanged;
  amountChanged = this.jokeService.amountChanged;
  url = this.jokeService.url;
  result: Joke[];
  result1: SingleJokeModel;
  single: string;
  setup: string;
  delivery: string;

  constructor(private jokeStorage: JokeStorageService, private jokeService: JokeService, private http: HttpClient) {
  }

  ngOnInit() {
    this.single = '';
    this.setup = '';
    this.delivery = '';
    this.url = 'https://v2.jokeapi.dev/joke/';
    this.initForm();
    this.jokeForm.get('categories').valueChanges.subscribe(
      data => {
        this.categoriesChanged = data;
      }
    );
    this.jokeForm.get('flags').valueChanges.subscribe(
      data => {
        this.flagsChanged = data;
      }
    );
    this.jokeForm.get('jokeType').valueChanges.subscribe(
      data => {
        this.jokeTypeChanged = data;
      }
    );
    this.jokeForm.get('contains').valueChanges.subscribe(
      data => {
        this.containsChanged = data;
      }
    );
    this.jokeForm.get('amount').valueChanges.subscribe(
      data => {
        this.amountChanged = data;
      }
    );
  }

  initForm() {
    this.jokeForm = new FormGroup({
      categories: new FormControl([]),
      flags: new FormControl([]),
      jokeType: new FormControl([]),
      contains: new FormControl(''),
      amount: new FormControl(0),
    });
  }

  get categories(): FormArray {
    return (<FormArray> this.jokeForm.get('categories'));
  }

  get flags(): FormArray {
    return (<FormArray> this.jokeForm.get('flags'));
  }

  get jokeType(): FormArray {
    return (<FormArray> this.jokeForm.get('jokeType'));
  }

  updateURL(): string {
    let urlFlags = this.flagsChanged;
    let urlCategories = this.categoriesChanged;
    let urlJokeType = this.jokeTypeChanged;
    let urlContains = this.containsChanged;
    let urlAmount: number = this.amountChanged;
    let completeUrl = this.url + urlCategories;


    if (urlFlags.length > 0 || urlJokeType.length > 0 || urlAmount) {
      completeUrl += '?';
    }
    let optionsArray: string[] = [];

    if (urlFlags.length > 0) {
      optionsArray.push('blacklistFlags=' + urlFlags.join(','));

    }
    if (urlJokeType.length == 1) {
      optionsArray.push('type=' + urlJokeType[0]);
    }
    if (urlContains != null && urlContains.trim() != '') {
      optionsArray.push('contains=' + urlContains);
    }
    if (urlAmount > 1) {
      optionsArray.push('amount=' + urlAmount);
    }
    completeUrl += optionsArray.join('&');
    return completeUrl;
  }


  sendRequest() {

    if (this.url.includes('amount')) {
      this.jokeStorage.getJokes(this.updateURL()).subscribe(
        data => {
          this.result = data['jokes'];
          console.log('result is ', this.result);
        });
    } else {
      this.jokeStorage.getSingleJoke(this.updateURL()).subscribe(
        data => {
          this.result1 = {
            error: data['error'],
            category: data['category'],
            type: data['type'],
            flags: data['flags'],
            id: data['id'],
            safe: data['safe'],
            lang: data['lang'],

            //single
            joke: data['joke'],

            //mutiple
            setup: data['setup'],
            delivery: data['delivery'],
          };

          this.single = this.result1.joke;
          this.setup = this.result1.setup;
          this.delivery = this.result1.delivery;
        }
      );
    }
  }

}
