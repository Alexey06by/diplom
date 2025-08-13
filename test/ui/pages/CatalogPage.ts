import { Page, Locator } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

export class CatalogPage {
  public readonly page: Page;
  private readonly product: Locator;

  constructor(page: Page) {
    this.page = page;
    this.product = page.locator('a.catalog-form__preview[href$="/cpu/amd/ryzen55600"]');
  }

  async open() {
    await this.page.goto(process.env.CATALOG_UI_URL);
  }

  async openProduct() {
    await this.product.click();
  }
}
