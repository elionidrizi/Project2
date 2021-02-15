import {Joke} from './joke-amount.model';
import {SingleJokeModel} from './single-joke.model';

export interface JOKEEE {
  error: boolean;
  amount?: number;
  jokes?: Joke[];
  singleJoke?:SingleJokeModel;
  // category?:string;
  // type?:string;
  // flags?:Flag;
  // id?:number;
  // safe?:boolean;
  // lang?:string;
  // joke?:string;
  // setup?:string;
  // delivery?:string;
}
