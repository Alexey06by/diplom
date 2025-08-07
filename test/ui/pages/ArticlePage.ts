import { Page } from "@playwright/test";

export class ArticlePage {
  constructor(private page: Page) {}

  articleTitle() {
    return this.page.locator(".news-header__title h1").first();
  }
}
