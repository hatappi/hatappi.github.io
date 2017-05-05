import { Hatappi.Github.IoPage } from './app.po';

describe('hatappi.github.io App', () => {
  let page: Hatappi.Github.IoPage;

  beforeEach(() => {
    page = new Hatappi.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
