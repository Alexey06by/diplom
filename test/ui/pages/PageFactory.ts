import { Page } from "@playwright/test";
import { MainPage } from "./MainPage";
import { CatalogPage } from "./CatalogPage";
import { ProductPage } from "./ProductPage";
import { CheckoutPage } from "./CheckoutPage";
import { CartPage } from "./CartPage";
import { CarsPage } from "./CarsPage";
import { OfferPage } from "./OfferPage";
import { ArticlePage } from "./ArticlePage";

export class PageFactory {
  static async mainPage(page: Page) {
    return new MainPage(page);
  }

  static async catalogPage(page: Page) {
    return new CatalogPage(page);
  }

  static async productPage(page: Page) {
    return new ProductPage(page);
  }

  static async checkoutPage(page: Page) {
    return new CheckoutPage(page);
  }

  static async cartPage(page: Page) {
    return new CartPage(page);
  }

  static async carsPage(page: Page) {
    return new CarsPage(page);
  }

  static async offerPage(page: Page) {
    return new OfferPage(page);
  }

  static async articlePage(page: Page) {
    return new ArticlePage(page);
  }
}
