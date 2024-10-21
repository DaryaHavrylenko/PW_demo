import { test, expect } from '@playwright/test';

test('user can search by product name', async ({ page }) => {
  await page.goto('https://mern-store-gold.vercel.app/');
  await page.getByPlaceholder('Search Products').click();
    // await page.getByPlaceholder('Search Products').fill('nik');
    await page.getByPlaceholder('Search Products').pressSequentially('nik');
    await page.getByRole('link', { name: 'Nike sportwear shirt $' }).click();
    await expect(page.getByRole('heading', { name: 'Nike sportwear shirt' })).toBeVisible();
});