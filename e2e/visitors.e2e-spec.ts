import {VisitorsPage} from './visitors.po';

describe('visitors page', () => {
  let page: VisitorsPage;

  beforeEach(() => {
    page = new VisitorsPage();
  });

  it('should show a list of visitors', () => {
    page.navigateTo();
  });

  it('can edit a visitor', () => {
    page.navigateTo();
  });

  it('can delete a visitor', () => {
    page.navigateTo();
  });
});
