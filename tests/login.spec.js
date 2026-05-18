const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Login functionality', () => {

  test('Valid login navigates to account overview', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('john', 'demo');
    await expect(page).toHaveURL(/.*overview.*/);
    await expect(page.locator('h1.title')).toContainText('Accounts Overview');
  });

  test('Invalid credentials shows error message', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('wronguser', 'wrongpass');
    await expect(page.locator('.error')).toBeVisible();
  });

  test('Empty credentials shows validation error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('', '');
    await expect(page.locator('.error')).toBeVisible();
  });

});