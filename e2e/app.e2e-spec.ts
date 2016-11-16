import { Mk2Page } from './app.po';

describe('mk2 App', function() {
  let page: Mk2Page;

  beforeEach(() => {
    page = new Mk2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
