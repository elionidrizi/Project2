import {Joke} from './joke-amount.model';
import {Flag} from './flags.model';

export interface SingleJokeModel{
  error:boolean;
  // jokes1:Joke[];
  category: string;
  type?: string;
  flags?: Flag;
  id?: number;
  safe?: boolean;
  lang?: string;

  //single
  joke: string;

  //mutiple
  setup: string;
  delivery: string;

}
