import {Flag} from './flags.model';

export interface Joke {
  error?: boolean;
  category: string;
  type?: string;
  flags?: Flag;
  id?: number;
  safe?: boolean;
  lang?: string;

  //single
  joke?: string;

  //mutiple
  setup?: string;
  delivery?: string;
}
