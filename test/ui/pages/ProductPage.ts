import { Page, Locator } from "@playwright/test";

export class ProductPage {
  public readonly page: Page;
  private readonly buy_now: Locator;
  private readonly add_to_cart: Locator;
  private readonly go_to_cart: Locator;
  private readonly product_full_name: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buy_now = page.locator(".product-aside__offers-item:first-child .product-aside__button_buy");
    this.add_to_cart = page.locator(".product-aside__offers-item:first-child .product-aside__button_cart");
    this.go_to_cart = page.locator('.button-style_base-alter[href^="https://cart."]');
    this.product_full_name = page.locator(".catalog-masthead__title");
  }

  async buyNow() {
    await this.buy_now.click();
  }

  async addToCart() {
    await this.add_to_cart.click();
  }

  async goToCart() {
    await this.go_to_cart.click();
  }

  productFullName() {
    return this.product_full_name;
  }
}
