import { Page, Locator } from "@playwright/test";

export class ArticlePage {
  public readonly page: Page;
  private readonly article_title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.article_title = page.locator(".news-header__title h1").first();
  }

  articleTitle() {
    return this.article_title;
  }
}
