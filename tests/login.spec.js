const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { users } = require('../test-data/users');

test.describe('Login functionality', () => {

  test('Valid login navigates to account overview', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.valid.username, users.valid.password);
    await expect(page).toHaveURL(/.*overview.*/);
    await expect(page.locator('h1.title')).toContainText('Accounts Overview');
  });

  test('Invalid credentials shows error message', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.invalid.username, users.invalid.password);
    await expect(page.locator('.error')).toBeVisible();
  });

  test('Empty credentials shows validation error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('', '');
    await expect(page.locator('.error')).toBeVisible();
  });

  test('Empty username shows validation error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('', users.valid.password);
    await expect(page.locator('.error')).toBeVisible();
  });

  test('Empty password shows validation error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.valid.username, '');
    await expect(page.locator('.error')).toBeVisible();
  });

});
