class BillPayPage {
  constructor(page) {
    this.page = page;
    this.payeeName = page.locator('input[name="payee.name"]');
    this.address = page.locator('input[name="payee.address.street"]');
    this.city = page.locator('input[name="payee.address.city"]');
    this.state = page.locator('input[name="payee.address.state"]');
    this.zipCode = page.locator('input[name="payee.address.zipCode"]');
    this.phone = page.locator('input[name="payee.phoneNumber"]');
    this.accountNumber = page.locator('input[name="payee.accountNumber"]');
    this.verifyAccount = page.locator('input[name="verifyAccount"]');
    this.amount = page.locator('input[name="amount"]');
    this.fromAccount = page.locator('select[name="fromAccountId"]');
    this.sendButton = page.locator('input[value="Send Payment"]');
    this.successTitle = page.locator('#billpayResult h1');
  }

  async goto() {
    await this.page.goto('/parabank/billpay.htm');
  }

  async fillPayeeDetails({ name, address, city, state, zip, phone, account, amount }) {
    await this.payeeName.fill(name);
    await this.address.fill(address);
    await this.city.fill(city);
    await this.state.fill(state);
    await this.zipCode.fill(zip);
    await this.phone.fill(phone);
    await this.accountNumber.fill(account);
    await this.verifyAccount.fill(account);
    await this.amount.fill(String(amount));
  }

  async submit() {
    await this.sendButton.click();
  }

  async getSuccessTitle() {
    return await this.successTitle.textContent();
  }
}

module.exports = { BillPayPage };
