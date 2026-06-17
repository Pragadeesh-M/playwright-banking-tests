class AccountsPage {
  constructor(page) {
    this.page = page;
    this.pageTitle = page.locator('h1.title');
    this.accountTable = page.locator('#accountTable');
    this.accountRows = page.locator('#accountTable tbody tr');
    this.totalBalance = page.locator('#accountTable tfoot td.ng-binding').last();
  }

  async goto() {
    await this.page.goto('/parabank/overview.htm');
  }

  async getAccountCount() {
    return await this.accountRows.count();
  }

  async clickFirstAccount() {
    await this.accountRows.first().locator('a').first().click();
  }

  async getPageTitle() {
    return await this.pageTitle.textContent();
  }
}

module.exports = { AccountsPage };
