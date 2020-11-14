import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Movie } from "../../../globals/types/movie";

import { StarRatingComponent } from 'ng-starrating';

import { MovieService } from "../../../globals/services/movie.service";
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  movieID:number;
  @Input() movie:Movie = {
    title:'',
    duration:0,
    description:'',
    plot:'',
    imdb: {
      rating:0,
      votes:0,
      id:0
    },
    rated:'',
    awards:{
      wins:0,
      nominations:'',
      text:'',
    }
  };
  
  constructor(
    private activateRouter:ActivatedRoute,
    private movieService: MovieService
  ) { 
    this.activateRouter.params.subscribe((params)=>{
      this.movieID = +params.id;
    });
  }

  ngOnInit(): void {
    if (this.movieID) {
      this.movieService.getByID(this.movieID).then(data => {
        this.movie = data;
      });
    }
  }

}
