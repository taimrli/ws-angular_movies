import {$, $$, browser, by, element, ElementArrayFinder, protractor} from 'protractor';

export class MoviesPage {
  navigateTo() {
    return browser.get('/movies');
  }

  getAllMovies(): ElementArrayFinder {
    return $$('.movie-card');
  }

  waitForMoviesToBeLoaded(): void {
    const conditions = protractor.ExpectedConditions;
    browser.wait(conditions.visibilityOf($('.movie-card')), 5000);
  }

  getMovieByTitle(title: string): ElementArrayFinder {
    return this.getAllMovies()
      .filter(elem => {
        return elem.$('h5').getText()
          .then(movieTitle => movieTitle === title);
      });
  }
}
