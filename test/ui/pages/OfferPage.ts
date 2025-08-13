import { Page, Locator } from "@playwright/test";

export class OfferPage {
  public readonly page: Page;
  private readonly offer_title: Locator;
  private readonly offer_price: Locator;
  private readonly offer_photo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.offer_title = page.locator("h1.vehicle-form__title");
    this.offer_price = page.locator(".vehicle-form__price_condensed");
    this.offer_photo = page.locator("//div[contains(@class, 'fotorama__active')]/img");
  }

  offerTitle() {
    return this.offer_title;
  }

  offerPrice() {
    return this.offer_price;
  }

  offerPhoto() {
    return this.offer_photo;
  }
}
