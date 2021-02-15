import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JokeService} from './joke.service';
import {JOKEEE} from './jokes.model';
import {SingleJokeModel} from './single-joke.model';

@Injectable({
  providedIn: 'root'
})
export class JokeStorageService {
  constructor(private http: HttpClient, private jokeService: JokeService) {
  }


  getJokes(url) {
    return this.http.get<JOKEEE>(url);
  }
  getSingleJoke(url){
    return this.http.get<SingleJokeModel>(url)
  }
}
