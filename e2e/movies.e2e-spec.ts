import {MoviesPage} from './movies.po';

describe('movies page', () => {
  let page: MoviesPage;

  beforeEach(() => {
    page = new MoviesPage();
  });

  it('should show movies', () => {
    page.navigateTo();
  });

  it('can remove a movie', () => {
    page.navigateTo();
  });
});
