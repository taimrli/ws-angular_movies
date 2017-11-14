import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Movie} from "../movie.model";

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent {
  @Input()
  movie: Movie;

  @Output()
  deleteMovie: EventEmitter<Movie> = new EventEmitter();
}
