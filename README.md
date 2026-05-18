# Playwright Banking Test Suite

E2E automated test suite for a demo banking application, 
built with Playwright and JavaScript using Page Object Model (POM).

## What's tested
- Login with valid credentials
- Login with invalid credentials  
- Empty field validation

## Tech Stack
- Playwright (JavaScript)
- Page Object Model
- Chromium browser

## How to run
git clone https://github.com/Pragadeesh-M/playwright-banking-tests
cd playwright-banking-tests
npm install
npx playwright install chromium
npx playwright test

## View report
npx playwright show-report
