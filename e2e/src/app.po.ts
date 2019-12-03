import { browser, by, element, WebElementPromise } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  getSearchLabel(){
    return element(by.id("srchlabel")).getText() as Promise<string>;
  }

  getSearchInput(){
    return element(by.css(".bootstrap-tagsinput input")).getWebElement();
  }

  getSearchButton(){
    return element(by.css("#srchBtn")).getWebElement();
  }

  getFoundLabel(){
    return element(by.css("#imgFnd")).getText() as Promise<string>;
  }

  getTags(){
    return element.all(by.css(".bootstrap-tagsinput span")).getText();
  }

  getImageCount(){
    return element.all(by.css("img")).count();
  }

  getPagination(){
    return element.all(by.css(".ngx-pagination li a")).getText() as Promise<string>;
  }
  
  getPaginationLinks(){
    return element(by.css(".ngx-pagination li:nth-child(4) a"));
  }

  getPage2Links(){
    return element(by.css(".ngx-pagination li:nth-child(5) a"));
  }

  
}
