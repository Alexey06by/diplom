import { Page } from "@playwright/test";

export class ProductPage {
  constructor(private page: Page) {}

  async buyNow() {
    await this.page.click(".product-aside__offers-item:first-child .product-aside__button_buy");
  }
  async addToCart() {
    await this.page.click(".product-aside__offers-item:first-child .product-aside__button_cart");
  }
  async goToCart() {
    await this.page.click('.button-style_base-alter[href^="https://cart."]');
  }

  productFullName() {
    return this.page.locator(".catalog-masthead__title");
  }
}
