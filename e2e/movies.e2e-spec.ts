import {MoviesPage} from './movies.po';

describe('movies page', () => {
  let page: MoviesPage;

  beforeEach(() => {
    page = new MoviesPage();
  });

  it('should show movies', () => {
    page.navigateTo();
    page.waitForMoviesToBeLoaded();

    const moviesList = page.getAllMovies();
    expect(moviesList.count()).toBeGreaterThan(0);
  });

  it('can find a movie', () => {
    page.navigateTo();
    page.waitForMoviesToBeLoaded();

    const moviesList = page.getAllMovies();

    page.getMovieByTitle('Despicable Me 2').then(movie => {
      expect(movie.length).toBe(1);
    });
  });

  it('can remove a movie', () => {
  });
});
