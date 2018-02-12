import {browser} from 'protractor';

export class VisitorsPage {
  navigateTo() {
    return browser.get('/visitors');
  }
}
