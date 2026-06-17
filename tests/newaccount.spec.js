const { expect } = require('@playwright/test');
const { test } = require('../fixtures/auth.fixture');
const { NewAccountPage } = require('../pages/NewAccountPage');

test.describe('Open New Account', () => {

  test('New account page loads correctly', async ({ authenticatedPage }) => {
    const newAccountPage = new NewAccountPage(authenticatedPage);
    await newAccountPage.goto();
    await expect(authenticatedPage.locator('h1.title')).toContainText('Open New Account');
    await expect(newAccountPage.accountTypeSelect).toBeVisible();
    await expect(newAccountPage.openButton).toBeVisible();
  });

  test('Can open a new Checking account', async ({ authenticatedPage }) => {
    const newAccountPage = new NewAccountPage(authenticatedPage);
    await newAccountPage.goto();
    await newAccountPage.openAccount('CHECKING');
    const successMsg = await newAccountPage.getSuccessMessage();
    expect(successMsg).toContain('Congratulations');
    const newId = await newAccountPage.getNewAccountId();
    expect(newId).toBeTruthy();
  });

  test('Can open a new Savings account', async ({ authenticatedPage }) => {
    const newAccountPage = new NewAccountPage(authenticatedPage);
    await newAccountPage.goto();
    await newAccountPage.openAccount('SAVINGS');
    const successMsg = await newAccountPage.getSuccessMessage();
    expect(successMsg).toContain('Congratulations');
  });

});
