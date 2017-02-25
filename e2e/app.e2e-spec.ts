import { GoGanttPage } from './app.po';

describe('go-gantt App', function() {
  let page: GoGanttPage;

  beforeEach(() => {
    page = new GoGanttPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
