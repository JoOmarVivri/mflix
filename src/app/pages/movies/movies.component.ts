import { Component, OnInit } from '@angular/core';
import { Movie } from "../../globals/types/movie";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  // private movieSrvice:MovieService;
  constructor( ) {
  }

  ngOnInit(): void {
  }

  addMovie(){
  }

  // handleMovieSelected(event:Movie){
  //   console.log('event padre',event);
  //   this.movieSelected = event;
  // }

}
