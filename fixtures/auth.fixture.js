const { test: base } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { users } = require('../test-data/users');

// Extends base test with a pre-authenticated page fixture
const test = base.extend({
  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.valid.username, users.valid.password);
    await page.waitForURL(/.*overview.*/);
    await use(page);
  },
});

module.exports = { test };
