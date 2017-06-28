import { KefWebsitePage } from './app.po';

describe('kef-website App', () => {
  let page: KefWebsitePage;

  beforeEach(() => {
    page = new KefWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
