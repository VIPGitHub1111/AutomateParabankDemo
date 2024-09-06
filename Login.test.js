const { test, expect } = require('@playwright/test');
const CREDENTIALS = require('./constants');
const SELECTORS = require('./selectors');

test.describe('Parabank Login Tests', () => {
  
  // Test Case: Valid Login
  test('Valid Login with correct username and password', async ({ page }) => {
    await page.goto(CREDENTIALS.LOGIN_URL);
    
    // Enter valid credentials
    await page.fill(SELECTORS.LOGIN_PAGE.USERNAME_INPUT, CREDENTIALS.VALID_USERNAME);
    await page.fill(SELECTORS.LOGIN_PAGE.PASSWORD_INPUT, CREDENTIALS.VALID_PASSWORD);
    
    // Click on login button
    await page.click(SELECTORS.LOGIN_PAGE.LOGIN_BUTTON);

    // Wait for the account overview page to load
    await page.goto(CREDENTIALS.Account_Login_URL);

    // Assert that the login was successful by checking if the URL changed
    await expect(page).toHaveURL(CREDENTIALS.Account_Login_URL);
  });

  // Test Case: Invalid Login (wrong username and password)
  test('Invalid Login with incorrect username and password', async ({ page }) => {
    await page.goto(CREDENTIALS.LOGIN_URL);

    // Wait for username input to be visible before interacting
    await page.waitForSelector(SELECTORS.LOGIN_PAGE.USERNAME_INPUT);
    
    // Enter invalid credentials
    await page.fill(SELECTORS.LOGIN_PAGE.USERNAME_INPUT, CREDENTIALS.INVALID_USERNAME);
    await page.fill(SELECTORS.LOGIN_PAGE.PASSWORD_INPUT, CREDENTIALS.INVALID_PASSWORD);
    
    // Click on login button
    await page.click(SELECTORS.LOGIN_PAGE.LOGIN_BUTTON);

    // Wait for the error message to appear
    await page.waitForSelector(SELECTORS.LOGIN_PAGE.errorMessageXPath);

    // Assert that error message is displayed
    const errorMessage = await page.textContent(SELECTORS.LOGIN_PAGE.errorMessageXPath);
    expect(errorMessage).toBe(CREDENTIALS.wrongCredentialsErrorMessage);
  });

  // Test Case: Empty Username and Password
  test('Login with empty username and password', async ({ page }) => {
    await page.goto(CREDENTIALS.LOGIN_URL);

    // Wait for username input to be visible before interacting
     await page.waitForSelector(SELECTORS.LOGIN_PAGE.USERNAME_INPUT);
    
    // Leave both fields empty and click login
    await page.fill(SELECTORS.LOGIN_PAGE.USERNAME_INPUT, CREDENTIALS.EMPTY_USERNAME);
    await page.fill(SELECTORS.LOGIN_PAGE.PASSWORD_INPUT, CREDENTIALS.EMPTY_PASSWORD);
    
    // Click on login button
    await page.click(SELECTORS.LOGIN_PAGE.LOGIN_BUTTON);

    // Wait for the error message to appear
    await page.waitForSelector(SELECTORS.LOGIN_PAGE.errorMessageXPath);

    // Assert that error message for empty fields is displayed
    const errorMessage = await page.textContent(SELECTORS.LOGIN_PAGE.errorMessageXPath);
    expect(errorMessage).toBe(CREDENTIALS.emptyFieldErrorMessage);
  });

  // Test Case: Empty Username
  test('Login with empty username and valid password', async ({ page }) => {
    await page.goto(CREDENTIALS.LOGIN_URL);

    // Wait for username input to be visible before interacting
    await page.waitForSelector(SELECTORS.LOGIN_PAGE.USERNAME_INPUT);
    
    // Leave username empty and fill in password
    await page.fill(SELECTORS.LOGIN_PAGE.USERNAME_INPUT, CREDENTIALS.EMPTY_USERNAME);
    await page.fill(SELECTORS.LOGIN_PAGE.PASSWORD_INPUT, CREDENTIALS.VALID_PASSWORD);
    
    // Click on login button
    await page.click(SELECTORS.LOGIN_PAGE.LOGIN_BUTTON);

    // Wait for the error message to appear
    await page.waitForSelector(SELECTORS.LOGIN_PAGE.errorMessageXPath);

    // Assert that error message for empty username is displayed
    const errorMessage = await page.textContent(SELECTORS.LOGIN_PAGE.errorMessageXPath);
    expect(errorMessage).toBe(CREDENTIALS.emptyFieldErrorMessage);
  });

  // Test Case: Empty Password
  test('Login with valid username and empty password', async ({ page }) => {
    await page.goto(CREDENTIALS.LOGIN_URL);

    // Wait for username input to be visible before interacting
    await page.waitForSelector(SELECTORS.LOGIN_PAGE.USERNAME_INPUT);
    
    // Fill in username and leave password empty
    await page.fill(SELECTORS.LOGIN_PAGE.USERNAME_INPUT, CREDENTIALS.VALID_USERNAME);
    await page.fill(SELECTORS.LOGIN_PAGE.PASSWORD_INPUT, CREDENTIALS.EMPTY_PASSWORD);
    
    // Click on login button
    await page.click(SELECTORS.LOGIN_PAGE.LOGIN_BUTTON);

    // Wait for the error message to appear
    await page.waitForSelector(SELECTORS.LOGIN_PAGE.errorMessageXPath);

    // Assert that error message for empty password is displayed
    const errorMessage = await page.textContent(SELECTORS.LOGIN_PAGE.errorMessageXPath);
    expect(errorMessage).toBe(CREDENTIALS.emptyFieldErrorMessage);

  });
});