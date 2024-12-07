import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder("Username").fill('standard_user')
  await page.getByPlaceholder('Password').fill('secret_sauce')

  await page.getByRole('button', { name: 'Login' }).click();
  
  await page.getByTestId('add-to-cart-sauce-labs-backpack').click()

  await page.getByTestId('shopping-cart-link').click()
  
  await page.getByTestId('checkout').click()

  await page.getByTestId('firstName').fill('teste')

  await page.getByTestId('lastName').fill('two')

  await page.getByTestId('postalCode').fill('00000000')

  await page.getByTestId('continue').click()


  await expect(page.getByText('Payment Information')).toBeVisible()
  
  await page.getByTestId('finish').click()

  await expect(page.getByText('Thank you for your order!')).toBeVisible()

});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
