import { Page } from "@playwright/test";

export class OfferPage {
  constructor(private page: Page) {}

  offerTitle() {
    return this.page.locator("h1.vehicle-form__title");
  }

  offerPrice() {
    return this.page.locator(".vehicle-form__price_condensed");
  }

  offerPhoto() {
    return this.page.locator("//div[contains(@class, 'fotorama__active')]/img");
  }
}
