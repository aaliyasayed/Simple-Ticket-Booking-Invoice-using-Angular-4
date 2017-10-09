import { WacossPage } from './app.po';

describe('wacoss App', () => {
  let page: WacossPage;

  beforeEach(() => {
    page = new WacossPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
