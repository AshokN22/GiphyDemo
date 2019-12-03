import { AppPage } from './app.po';
import { browser, logging, protractor, WebElement } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should check Search label', () => {
    page.navigateTo();
    expect(page.getSearchLabel()).toEqual('Enter your search :');
  });

  it('Should check search tags',()=>{
    page.navigateTo();
    var input = page.getSearchInput();
    input.sendKeys("burger");
    input.sendKeys(protractor.Key.ENTER);
    input.sendKeys("sandwich");
    input.sendKeys(protractor.Key.ENTER);
    var data = ['burger', '', 'sandwich', ''];
    expect(page.getTags()).toEqual(data);
  })

  it('Should check found Elements',()=>{
    page.navigateTo();
    var input = page.getSearchInput();
    input.sendKeys("burger");
    input.sendKeys(protractor.Key.ENTER);
    input.sendKeys("sandwich");
    input.sendKeys(protractor.Key.ENTER);
    var button = page.getSearchButton();
    button.click();
    expect(page.getFoundLabel()).toEqual("Images Found : 50");
  })

  it('Should check No. of Images on Page 1',()=>{
    page.navigateTo();
    var input = page.getSearchInput();
    input.sendKeys("burger");
    input.sendKeys(protractor.Key.ENTER);
    var button = page.getSearchButton();
    button.click();
    //console.log(page.getImageCount());
    expect(page.getImageCount()).toEqual(9);
  })

  it('Should check Pagination on Page 1',()=>{
    page.navigateTo();
    var input = page.getSearchInput();
    input.sendKeys("burger");
    input.sendKeys(protractor.Key.ENTER);
    var button = page.getSearchButton();
    button.click();
    //console.log(page.getImageCount());
    var pageData = ['page\n2', 'page\n3', 'Next\npage']
    expect(page.getPagination()).toEqual(pageData);
  })

  it('Should check No. of Images on Page 2',()=>{
    page.navigateTo();
    var input = page.getSearchInput();
    input.sendKeys("burger");
    input.sendKeys(protractor.Key.ENTER);
    var button = page.getSearchButton();
    button.click();
    var link = page.getPaginationLinks();
    link.click();
    expect(page.getImageCount()).toEqual(9);
  })

  it('Should check Pagination on Page 2',()=>{
    page.navigateTo();
    var input = page.getSearchInput();
    input.sendKeys("burger");
    input.sendKeys(protractor.Key.ENTER);
    var button = page.getSearchButton();
    button.click();
    var link = page.getPaginationLinks();
    link.click();
    var pageData = ['Previous\npage','page\n1', 'page\n3', 'Next\npage']
    expect(page.getPagination()).toEqual(pageData);
  })

  it('Should check No. of Images on Page 3',()=>{
    page.navigateTo();
    var input = page.getSearchInput();
    input.sendKeys("burger");
    input.sendKeys(protractor.Key.ENTER);
    var button = page.getSearchButton();
    button.click();
    var link = page.getPage2Links();
    link.click();
    expect(page.getImageCount()).toEqual(7);
  })

  it('Should check Pagination on Page 3',()=>{
    page.navigateTo();
    var input = page.getSearchInput();
    input.sendKeys("burger");
    input.sendKeys(protractor.Key.ENTER);
    var button = page.getSearchButton();
    button.click();
    var link = page.getPage2Links();
    link.click();
    var pageData = ['Previous\npage','page\n1', 'page\n2']
    expect(page.getPagination()).toEqual(pageData);
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
