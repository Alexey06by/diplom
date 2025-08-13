import { Page, Locator } from "@playwright/test";

export class CartPage {
  public readonly page: Page;
  private readonly proceed_to_checkout: Locator;
  private readonly reject_button: Locator;

  constructor(page: Page) {
    this.page = page;
    this.proceed_to_checkout = page.locator(".button-style_primary");
    this.reject_button = page.locator("#reject-button");
  }

  async proceedToCheckout() {
    await this.proceed_to_checkout.click();
  }

  async rejectCookies() {
    await this.reject_button.click();
    await this.reject_button.click();
  }
}
