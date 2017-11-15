import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CinemaComponent} from "./cinama/cinema.component";
import {MoviesComponent} from "./cinama/movies/movies.component";
import {MovieComponent} from "./cinama/movies/movie/movie.component";
import {MovieService} from "./cinama/movies/movie.service";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./cinama/home/home.component";
import {RouterModule, Routes} from "@angular/router";

const routeConfig : Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'movies', component: MoviesComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent, CinemaComponent, MoviesComponent, MovieComponent, HomeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routeConfig)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
