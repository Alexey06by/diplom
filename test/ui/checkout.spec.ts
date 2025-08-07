import { test, expect, Page } from "@playwright/test";
import { PageFactory } from "./pages/PageFactory";

test.describe("Checkout", () => {
  test("Should come to checkout from main page", async ({ page }) => {
    test.setTimeout(90000);
    const mainPage = await PageFactory.mainPage(page);
    await mainPage.open();
    await mainPage.openCatalog();

    const catalogPage = await PageFactory.catalogPage(page);
    await catalogPage.openProduct();

    const productPage = await PageFactory.productPage(page);
    const productFullName = await productPage.productFullName().textContent();
    await productPage.buyNow();

    const checkoutPage = await PageFactory.checkoutPage(page);
    const pageTitle = checkoutPage.pageTitle();
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toContainText("Оформление заказа");

    const productName = checkoutPage.productName();
    await expect(productName).toBeVisible();
    const productNameText = (await productName.textContent()).trim();
    expect(productFullName.includes(productNameText)).toBe(true);

    await expect(page).toHaveURL(/cart\.+[a-z.]+\/order/);
  });

  test("Should proceed to checkout from cart", async ({ page }) => {
    const catalogPage = await PageFactory.catalogPage(page);
    await catalogPage.open();
    await catalogPage.openProduct();

    const productPage = await PageFactory.productPage(page);
    const productFullName = await productPage.productFullName().textContent();
    await productPage.addToCart();
    await productPage.goToCart();

    const cartPage = await PageFactory.cartPage(page);
    await cartPage.rejectCookies();
    await cartPage.proceedToCheckout();

    const checkoutPage = await PageFactory.checkoutPage(page);
    const pageTitle = checkoutPage.pageTitle();
    await expect(pageTitle).toBeVisible();
    await expect(pageTitle).toContainText("Оформление заказа");

    const productName = checkoutPage.productName();
    await expect(productName).toBeVisible();
    const productNameText = (await productName.textContent()).trim();
    expect(productFullName.includes(productNameText)).toBe(true);

    await expect(page).toHaveURL(/cart\.+[a-z.]+\/order/);
  });
});
