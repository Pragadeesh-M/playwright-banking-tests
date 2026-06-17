# Playwright Banking Test Suite

[![Playwright Tests](https://github.com/Pragadeesh-M/playwright-banking-tests/actions/workflows/ci.yml/badge.svg)](https://github.com/Pragadeesh-M/playwright-banking-tests/actions/workflows/ci.yml)

E2E automated test suite for the [ParaBank](https://parabank.parasoft.com) demo banking application, built with Playwright and JavaScript using the Page Object Model (POM) pattern.

## Test Coverage

| Module | Test Cases |
|---|---|
| Login | Valid login, invalid credentials, empty fields, partial fields |
| Accounts Overview | Page load, account count, account activity navigation |
| Funds Transfer | Form elements, successful transfer, invalid amount |
| Open New Account | Checking account, savings account |
| Bill Pay | Form load, successful payment, empty form validation |

## Tech Stack

- [Playwright](https://playwright.dev/) v1.60+
- JavaScript (CommonJS)
- Page Object Model (POM)
- Custom fixtures for authenticated sessions
- GitHub Actions CI

## Project Structure

```
playwright-banking-tests/
├── fixtures/
│   └── auth.fixture.js       # Pre-authenticated page fixture
├── pages/
│   ├── LoginPage.js
│   ├── AccountsPage.js
│   ├── TransferPage.js
│   ├── NewAccountPage.js
│   └── BillPayPage.js
├── test-data/
│   └── users.js              # Centralised test data
├── tests/
│   ├── login.spec.js
│   ├── accounts.spec.js
│   ├── transfer.spec.js
│   ├── newaccount.spec.js
│   └── billpay.spec.js
├── playwright.config.js
└── package.json
```

## Getting Started

```bash
git clone https://github.com/Pragadeesh-M/playwright-banking-tests
cd playwright-banking-tests
npm install
npx playwright install
```

## Running Tests

```bash
# All tests (Chromium + Firefox + WebKit)
npm test

# Single browser
npm run test:chromium
npm run test:firefox
npm run test:webkit

# Individual modules
npm run test:login
npm run test:accounts
npm run test:transfer
npm run test:billpay

# Headed mode (visible browser)
npm run test:headed
```

## View Report

```bash
npm run report
```

## CI

Tests run automatically on every push and pull request via GitHub Actions. Reports and artifacts are uploaded and retained for 30 days.
