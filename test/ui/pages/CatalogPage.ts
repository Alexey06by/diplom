import { Page } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

export class CatalogPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto(process.env.CATALOG_UI_URL);
  }

  async openProduct() {
    await this.page.click('a.catalog-form__preview[href$="/cpu/amd/ryzen55600"]');
  }
}
