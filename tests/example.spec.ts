import { test, expect } from '@playwright/test';

test('acess site and buy a product', async ({ page }) => {
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