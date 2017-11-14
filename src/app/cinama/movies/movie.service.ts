import {Movie} from "./movie.model";
import {Injectable} from "@angular/core";

@Injectable()
export class MovieService {
  getAllMovies() : Movie[] {
    return [
      {
        "title": "Dawn of the Planet of the Apes",
        "image": "http://api.androidhive.info/json/movies/1.jpg",
        "rating": 8.3,
        "releaseYear": 2014,
        "genre": [
          "Action",
          "Drama",
          "Sci-Fi"
        ]
      },
      {
        "title": "District 9",
        "image": "http://api.androidhive.info/json/movies/2.jpg",
        "rating": 8,
        "releaseYear": 2009,
        "genre": [
          "Action",
          "Sci-Fi",
          "Thriller"
        ]
      },
      {
        "title": "Transformers: Age of Extinction",
        "image": "http://api.androidhive.info/json/movies/3.jpg",
        "rating": 6.3,
        "releaseYear": 2014,
        "genre": [
          "Action",
          "Adventure",
          "Sci-Fi"
        ]
      }
    ];
  }
}
