import {Component, Input} from "@angular/core";
import {Movie} from "../movie.model";

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent {
  @Input()
  movie: Movie;
}
