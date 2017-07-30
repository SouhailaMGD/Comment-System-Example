import { Commentaires1Page } from './app.po';

describe('commentaires1 App', () => {
  let page: Commentaires1Page;

  beforeEach(() => {
    page = new Commentaires1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
