const { expect } = require('@playwright/test');
const { test } = require('../fixtures/auth.fixture');
const { TransferPage } = require('../pages/TransferPage');

test.describe('Funds Transfer', () => {

  test('Transfer page loads with form elements', async ({ authenticatedPage }) => {
    const transferPage = new TransferPage(authenticatedPage);
    await transferPage.goto();
    await expect(transferPage.amountInput).toBeVisible();
    await expect(transferPage.fromAccountSelect).toBeVisible();
    await expect(transferPage.toAccountSelect).toBeVisible();
    await expect(transferPage.transferButton).toBeVisible();
  });

  test('Successful fund transfer shows confirmation', async ({ authenticatedPage }) => {
    const transferPage = new TransferPage(authenticatedPage);
    await transferPage.goto();
    // Wait for accounts to load into selects
    await transferPage.fromAccountSelect.waitFor();
    const optionCount = await transferPage.fromAccountSelect.locator('option').count();
    if (optionCount < 2) {
      test.skip(true, 'Need at least 2 accounts to transfer between');
    }
    await transferPage.transfer(10);
    await expect(authenticatedPage.locator('#showResult h1')).toContainText('Transfer Complete!');
  });

  test('Transfer with invalid amount shows error', async ({ authenticatedPage }) => {
    const transferPage = new TransferPage(authenticatedPage);
    await transferPage.goto();
    await transferPage.amountInput.fill('0');
    await transferPage.transferButton.click();
    await expect(transferPage.errorMessage).toBeVisible();
  });

});
