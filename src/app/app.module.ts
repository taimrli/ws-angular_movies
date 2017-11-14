import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CinemaComponent} from "./cinama/cinema.component";
import {MoviesComponent} from "./cinama/movies/movies.component";


@NgModule({
  declarations: [
    AppComponent, CinemaComponent, MoviesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
