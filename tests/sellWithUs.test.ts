import { test, expect } from '@playwright/test';

test('user can submit "Become A MERN Store Seller!"', async ({ page }) => {
await page.goto('https://mern-store-gold.vercel.app/sell');
await page.getByPlaceholder('Your Full Name').press('CapsLock');
await page.getByPlaceholder('Your Full Name').fill('Daria');
await page.getByPlaceholder('Your Email Address').fill(Date.now()+"@gm.com");
await page.getByPlaceholder('Your Phone Number').fill('0998899098');
await page.getByPlaceholder('Your Business Brand').fill('noname brand');
await page.getByPlaceholder('Please Describe Your Business').fill('test desc 1234567890');
    await page.getByRole('button', { name: 'Submit' }).click();
await expect(page.getByPlaceholder('Your Full Name')).toBeEmpty();
});