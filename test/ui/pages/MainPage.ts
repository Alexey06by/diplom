import { Page, Locator } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

export class MainPage {
  public readonly page: Page;
  private readonly catalog: Locator;

  constructor(page: Page) {
    this.page = page;
    this.catalog = page.locator('.b-main-navigation__link[href^="https://catalog."]');
  }

  async open() {
    await this.page.goto(process.env.BASE_UI_URL);
  }

  async openCatalog() {
    await this.catalog.click();
  }
}
