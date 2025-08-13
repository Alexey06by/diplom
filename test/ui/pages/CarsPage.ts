import { Page, Locator } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

export class CarsPage {
  public readonly page: Page;
  private readonly offer: Locator;
  private readonly article: Locator;
  private readonly filter_brand: Locator;
  private readonly filter_brand_audi: Locator;
  private readonly filter_model: Locator;
  private readonly filter_model_a6: Locator;
  private readonly filter_body_type: Locator;
  private readonly offer_title: Locator;
  private readonly car_body_type: Locator;

  constructor(page: Page) {
    this.page = page;
    this.offer = page.locator(
      ".vehicle-form__offers-unit:first-child .vehicle-form__panorama-item_primary:first-child",
    );
    this.article = page.locator(".vehicle-form__slider-item:first-child picture");
    this.filter_brand = page.locator(
      ".vehicle-form__row:nth-child(2) .vehicle-form__line_condensed-other:first-child .input-style__real",
    );
    this.filter_brand_audi = page.locator("//div[@class='dropdown-style__checkbox-sign'][text()='Audi']");
    this.filter_model = page.locator(
      ".vehicle-form__row:nth-child(2) .vehicle-form__line_condensed-other:nth-child(2) .input-style__real",
    );
    this.filter_model_a6 = page.locator("//div[@class='dropdown-style__checkbox-sign'][text()='A6']");
    this.filter_body_type = page.locator("//div[@class='vehicle-form__checkbox-sign'][contains(text(), 'Седан')]");
    this.offer_title = page.locator(".vehicle-form__offers-unit:first-child .vehicle-form__link_noreflex");
    this.car_body_type = page.locator(".vehicle-form__offers-unit:first-child .vehicle-form__description_car");
  }

  async open() {
    await this.page.goto(process.env.CARS_UI_URL);
  }

  async openOffer() {
    await this.offer.click();
  }

  async openArticle() {
    await this.article.click();
  }

  async setFilterBrand() {
    await this.filter_brand.click();
    await this.filter_brand_audi.click();
  }

  async setFilterModel() {
    await this.filter_model.click();
    await this.filter_model_a6.click();
  }

  async setFilterBodyType() {
    await this.filter_body_type.click();
  }

  offerTitle() {
    return this.offer_title;
  }

  offerCarBodyType() {
    return this.car_body_type;
  }
}
