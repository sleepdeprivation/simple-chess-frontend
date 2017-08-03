import { ChessPage } from './app.po';

describe('chess App', () => {
  let page: ChessPage;

  beforeEach(() => {
    page = new ChessPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
