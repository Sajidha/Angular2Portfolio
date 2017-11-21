import { PortfolioDirectoryPage } from './app.po';

describe('portfolio-directory App', function() {
  let page: PortfolioDirectoryPage;

  beforeEach(() => {
    page = new PortfolioDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
