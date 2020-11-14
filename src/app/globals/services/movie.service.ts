import { Injectable } from '@angular/core';
import { CrudService } from "../services/crud.service";
import { Movie } from '../types/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends CrudService {

  // movies: Array<Movie> = [
  //   { title: 'titulo 1', description: 'desc', duration: 100 },
  //   { title: 'titulo 2', description: 'desc', duration: 100 },
  //   { title: 'titulo 3', description: 'desc', duration: 100 },
  //   { title: 'titulo 4', description: 'desc', duration: 100 },
  //   { title: 'titulo 5', description: 'desc', duration: 100 },
  // ];

  movies: Array<Movie>;

  protected endpoint: string = 'movies';

  getAllFake():Promise<Movie[]>{
    return new Promise((resolve,reject)=>{
      resolve(this.movies);
    });
  }
}
