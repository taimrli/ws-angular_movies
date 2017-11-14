import {Component, OnInit} from "@angular/core";
import {Movie} from "./movie.model";
import {MovieService} from "./movie.service";

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit{

  movies: Movie[];

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movies = this.movieService.getAllMovies();
  }

  onDeleteMovie(movieToDelete: Movie) {
    this.movies = this.movies.filter(movie => movieToDelete !== movie)
  }
}
