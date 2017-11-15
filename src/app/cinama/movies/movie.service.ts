import {Movie} from "./movie.model";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) {
  }

  getAllMovies() : Observable<Movie[]> {
    return this.http.get<Movie[]>("/api/movies");
  }
}
