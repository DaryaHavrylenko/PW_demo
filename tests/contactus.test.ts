import { test, expect } from '@playwright/test';

test('user can submit "Contact us"', async ({ page }) => {
  await page.goto('https://mern-store-gold.vercel.app/contact');
  await page.getByPlaceholder('You Full Name').fill('daria');
  await page.getByPlaceholder('Your Email Address').fill(Date.now()+'@gm.com');
  await page.getByPlaceholder('Please Describe Your Message').fill('test desc');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByPlaceholder('Please Describe Your Message').click();
  await page.getByPlaceholder('Please Describe Your Message').fill('test desc123');
  await page.getByRole('button', { name: 'Submit' }).click();
    await page.locator('div').filter({ hasText: 'Contact InformationNameEmailMessageSubmit' }).nth(3).click();
    await expect(page.getByPlaceholder('You Full Name')).toBeEmpty();
});

test('user can NOT submit "Contact us"', async ({ page }) => {
  await page.goto('https://mern-store-gold.vercel.app/contact');
  await page.getByPlaceholder('You Full Name').fill('daria');
    await page.getByPlaceholder('Your Email Address').fill('qwerty666@gm.com');
    // await page.getByPlaceholder('Your Email Address').fill(Date.now()+'@gm.com');
  await page.getByPlaceholder('Please Describe Your Message').fill('test desc12345');
  await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByRole('heading', { name: "Please Try Again!" })).toBeVisible();
    await expect(page.getByText("A request already existed for same email address")).toBeVisible();
});