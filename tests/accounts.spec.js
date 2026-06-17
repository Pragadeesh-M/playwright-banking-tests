const { expect } = require('@playwright/test');
const { test } = require('../fixtures/auth.fixture');
const { AccountsPage } = require('../pages/AccountsPage');

test.describe('Accounts Overview', () => {

  test('Accounts overview page displays after login', async ({ authenticatedPage }) => {
    const accountsPage = new AccountsPage(authenticatedPage);
    await expect(authenticatedPage.locator('h1.title')).toContainText('Accounts Overview');
  });

  test('At least one account is listed', async ({ authenticatedPage }) => {
    const accountsPage = new AccountsPage(authenticatedPage);
    const count = await accountsPage.getAccountCount();
    expect(count).toBeGreaterThan(0);
  });

  test('Clicking an account navigates to account activity', async ({ authenticatedPage }) => {
    const accountsPage = new AccountsPage(authenticatedPage);
    await accountsPage.clickFirstAccount();
    await expect(authenticatedPage).toHaveURL(/.*activity.htm.*/);
    await expect(authenticatedPage.locator('h1.title')).toContainText('Account Activity');
  });

});
