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
import {VisitorsComponent} from "./cinama/visitors/visitors.component";
import {VisitorService} from "./cinama/visitors/visitor.service";

const routeConfig : Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'visitors', component: VisitorsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent, CinemaComponent, MoviesComponent, MovieComponent, HomeComponent, VisitorsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routeConfig)
  ],
  providers: [MovieService, VisitorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
