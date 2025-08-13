import { test, expect } from "@playwright/test";
import { PageFactory } from "./pages/PageFactory";

test.describe("Cars", () => {
  test.beforeEach(async ({ page }) => {
    const carsPage = await PageFactory.carsPage(page);
    await carsPage.open();
  });

  test("Should open an offer from Cars section", async ({ page }) => {
    const carsPage = await PageFactory.carsPage(page);
    await carsPage.openOffer();

    const offerPage = await PageFactory.offerPage(page);
    const offerTitle = offerPage.offerTitle();
    await expect(offerTitle).toBeVisible();

    const offerPrice = offerPage.offerPrice();
    await expect(offerPrice).toBeVisible();

    const offerPhoto = offerPage.offerPhoto();
    await expect(offerPhoto).toBeVisible();

    await expect(page).toHaveURL(/ab\./);
  });

  test("Should open a news article from Cars section", async ({ page, context }) => {
    const carsPage = await PageFactory.carsPage(page);
    const pagePromise = context.waitForEvent("page");
    await carsPage.openArticle();

    const newPage = await pagePromise;
    const articlePage = await PageFactory.articlePage(newPage);
    const articleTitle = articlePage.articleTitle();
    await expect(articleTitle).toBeVisible();

    await expect(newPage).toHaveURL(/auto\./);
  });

  test("Should filter offers from Cars section", async ({ page, context }) => {
    const carsPage = await PageFactory.carsPage(page);
    await carsPage.setFilterBrand();
    await carsPage.setFilterModel();
    await carsPage.setFilterBodyType();

    const offerTitle = carsPage.offerTitle();
    await expect(offerTitle).toBeVisible();
    await expect(offerTitle).toContainText("Audi");
    await expect(offerTitle).toContainText("A6");

    const offerCarBodyType = carsPage.offerCarBodyType();
    await expect(offerCarBodyType).toBeVisible();
    await expect(offerCarBodyType).toHaveText("Седан");
  });
});
