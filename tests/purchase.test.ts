import { test, expect } from "@playwright/test";

test("logged in user can place order for item", async ({ page }) => {
  await page.goto("https://mern-store-gold.vercel.app/login");
  await page
    .getByRole("main")
    .getByPlaceholder("Please Enter Your Email")
    .fill("havrylenkoit@gmail.com");
  await page.getByPlaceholder("Please Enter Your Password").fill("qwerty1234");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.getByRole("heading", { name: "Login" })).not.toBeVisible();
  await page.getByRole("link", { name: "Brands " }).click();
  await page.getByRole("menuitem", { name: "See all" }).click();
  await page.getByRole("link", { name: "Polo Ea ius elitr ridens" }).click();
  await page.getByRole("link", { name: "Polo shirt By Polo Ea ius" }).click();
  await page.getByRole("button", { name: "Add To Bag" }).click();
  await page.getByRole("button", { name: "Place Order" }).click();
    // Strict mode violation: await expect(page
    //     .locator("heading")).toContainText("Thank you for your order.");
    await expect(page.getByRole("heading", { name: "Thank you for your order." })).toBeVisible();
});
