import { Page } from "@playwright/test";

export class CheckoutPage {
  constructor(private page: Page) {}

  pageTitle() {
    return this.page.locator(".cart-form__title_condensed-other");
  }

  productName() {
    return this.page.locator(
      ".cart-form__total-group .cart-form__description:nth-child(2) .cart-form__description-part_1",
    );
  }
}
