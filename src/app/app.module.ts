import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CinemaComponent} from "./cinama/cinema.component";
import {MoviesComponent} from "./cinama/movies/movies.component";
import {MovieComponent} from "./cinama/movies/movie/movie.component";
import {MovieService} from "./cinama/movies/movie.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent, CinemaComponent, MoviesComponent, MovieComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
