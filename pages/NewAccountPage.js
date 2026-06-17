class NewAccountPage {
  constructor(page) {
    this.page = page;
    this.accountTypeSelect = page.locator('#type');
    this.fromAccountSelect = page.locator('#fromAccountId');
    this.openButton = page.locator('input[value="Open New Account"]');
    this.newAccountId = page.locator('#newAccountId');
    this.successMessage = page.locator('#openAccountResult h1');
  }

  async goto() {
    await this.page.goto('/parabank/openaccount.htm');
  }

  async openAccount(type = 'CHECKING') {
    await this.accountTypeSelect.selectOption(type === 'SAVINGS' ? '1' : '0');
    await this.fromAccountSelect.selectOption({ index: 0 });
    await this.openButton.click();
  }

  async getNewAccountId() {
    await this.newAccountId.waitFor();
    return await this.newAccountId.textContent();
  }

  async getSuccessMessage() {
    return await this.successMessage.textContent();
  }
}

module.exports = { NewAccountPage };
