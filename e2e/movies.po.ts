import { browser, by, element } from 'protractor';

export class MoviesPage {
  navigateTo() {
    return browser.get('/movies');
  }
}
