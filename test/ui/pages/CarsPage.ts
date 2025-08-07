import { Page } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

export class CarsPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto(process.env.CARS_UI_URL);
  }

  async openOffer() {
    await this.page.click(".vehicle-form__offers-unit:first-child .vehicle-form__panorama-item_primary:first-child");
  }

  async openArticle() {
    await this.page.click(".vehicle-form__slider-item:first-child picture");
  }

  async setFilterBrand() {
    await this.page.click(
      ".vehicle-form__row:nth-child(2) .vehicle-form__line_condensed-other:first-child .input-style__real",
    );
    await this.page.click("//div[@class='dropdown-style__checkbox-sign'][text()='Audi']");
  }

  async setFilterModel() {
    await this.page.click(
      ".vehicle-form__row:nth-child(2) .vehicle-form__line_condensed-other:nth-child(2) .input-style__real",
    );
    await this.page.click("//div[@class='dropdown-style__checkbox-sign'][text()='A6']");
  }

  async setFilterBodyType() {
    await this.page.click("//div[@class='vehicle-form__checkbox-sign'][contains(text(), 'Седан')]");
  }

  offerTitle() {
    return this.page.locator(".vehicle-form__offers-unit:first-child .vehicle-form__link_noreflex");
  }

  offerCarBodyType() {
    return this.page.locator(".vehicle-form__offers-unit:first-child .vehicle-form__description_car");
  }
}
