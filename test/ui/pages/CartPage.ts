import { Page } from "@playwright/test";

export class CartPage {
  constructor(private page: Page) {}

  async proceedToCheckout() {
    await this.page.click(".button-style_primary");
  }

  async rejectCookies() {
    await this.page.click("#reject-button");
    await this.page.click("#reject-button");
  }
}
