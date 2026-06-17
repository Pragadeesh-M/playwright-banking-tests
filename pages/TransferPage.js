class TransferPage {
  constructor(page) {
    this.page = page;
    this.amountInput = page.locator('#amount');
    this.fromAccountSelect = page.locator('#fromAccountId');
    this.toAccountSelect = page.locator('#toAccountId');
    this.transferButton = page.locator('input[value="Transfer"]');
    this.successMessage = page.locator('#showResult h1');
    this.errorMessage = page.locator('.error');
  }

  async goto() {
    await this.page.goto('/parabank/transfer.htm');
  }

  async transfer(amount, fromIndex = 0, toIndex = 1) {
    await this.amountInput.fill(String(amount));
    await this.fromAccountSelect.selectOption({ index: fromIndex });
    await this.toAccountSelect.selectOption({ index: toIndex });
    await this.transferButton.click();
  }

  async getSuccessMessage() {
    return await this.successMessage.textContent();
  }
}

module.exports = { TransferPage };
