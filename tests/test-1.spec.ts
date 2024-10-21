import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mern-store-gold.vercel.app/login');
  await page.getByRole('main').getByPlaceholder('Please Enter Your Email').click();
  await page.getByRole('main').getByPlaceholder('Please Enter Your Email').fill('havrylenkoit@gmail.com');
  await page.getByPlaceholder('Please Enter Your Password').click();
  await page.getByPlaceholder('Please Enter Your Password').fill('qwerty1234');
  await page.getByRole('button', { name: 'Login' }).click();
});