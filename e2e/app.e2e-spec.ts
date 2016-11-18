import { FlashAppPage } from './app.po';

describe('flash-app App', function() {
  let page: FlashAppPage;

  beforeEach(() => {
    page = new FlashAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
