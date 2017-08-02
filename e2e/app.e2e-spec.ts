import { ReactiveFormsAppPage } from './app.po';

describe('reactive-forms-app App', () => {
  let page: ReactiveFormsAppPage;

  beforeEach(() => {
    page = new ReactiveFormsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
