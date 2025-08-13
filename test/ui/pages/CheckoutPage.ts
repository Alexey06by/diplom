import { Page, Locator } from "@playwright/test";

export class CheckoutPage {
  public readonly page: Page;
  private readonly page_title: Locator;
  private readonly product_name: Locator;

  constructor(page: Page) {
    this.page = page;
    this.page_title = page.locator(".cart-form__title_condensed-other");
    this.product_name = page.locator(
      ".cart-form__total-group .cart-form__description:nth-child(2) .cart-form__description-part_1",
    );
  }

  pageTitle() {
    return this.page_title;
  }

  productName() {
    return this.product_name;
  }
}
