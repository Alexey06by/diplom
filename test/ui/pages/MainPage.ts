import { Page } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

export class MainPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto(process.env.BASE_UI_URL);
  }

  async openCatalog() {
    await this.page.click('.b-main-navigation__link[href^="https://catalog."]');
  }
}
