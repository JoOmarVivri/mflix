import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from "../../../globals/types/movie";

import { MovieService } from "../../../globals/services/movie.service";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  
  movies: Array<Movie>;
  filteredMovies: Array<Movie>;
  query:string;
  displayedColumns:Array<string>=['title','plot'];

  @Output() onMovieSelected:EventEmitter<Movie> = new EventEmitter();

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getAll().then(data => {
      this.movies = data;
      this.filteredMovies = data;
    });
  }

  selectMovie(item){
    this.onMovieSelected.emit(item);
  }

  filtrar(event){
    this.filteredMovies = this.movies.filter(item => {
      return item.title.includes(this.query);
    });
  }

  validateEnter(e){
    if (e.key === 'Enter') {
      this.filtrar(null);
    }
  }

}
