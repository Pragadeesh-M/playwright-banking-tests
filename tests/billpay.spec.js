const { expect } = require('@playwright/test');
const { test } = require('../fixtures/auth.fixture');
const { BillPayPage } = require('../pages/BillPayPage');
const { payee } = require('../test-data/users');

test.describe('Bill Pay', () => {

  test('Bill pay page loads with all form fields', async ({ authenticatedPage }) => {
    const billPayPage = new BillPayPage(authenticatedPage);
    await billPayPage.goto();
    await expect(authenticatedPage.locator('h1.title')).toContainText('Bill Payment Service');
    await expect(billPayPage.payeeName).toBeVisible();
    await expect(billPayPage.sendButton).toBeVisible();
  });

  test('Successful bill payment shows confirmation', async ({ authenticatedPage }) => {
    const billPayPage = new BillPayPage(authenticatedPage);
    await billPayPage.goto();
    await billPayPage.fillPayeeDetails(payee);
    await billPayPage.submit();
    const title = await billPayPage.getSuccessTitle();
    expect(title).toContain('Bill Payment Complete');
  });

  test('Submitting empty form shows validation errors', async ({ authenticatedPage }) => {
    const billPayPage = new BillPayPage(authenticatedPage);
    await billPayPage.goto();
    await billPayPage.submit();
    await expect(authenticatedPage.locator('.error')).toBeVisible();
  });

});
