const { test, expect } = require('@playwright/test');
const CREDENTIALS = require('./constants');
const SELECTORS = require('./selectors');

test.describe('Parabank Registration Tests', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the registration page
    await page.goto(CREDENTIALS.REGISTRATION.REGISTER_URL);
  });
   // Test Case: Registration with Existing Username
   test('Registration with an already existing username', async ({ page }) => {
    await page.fill(SELECTORS.REGISTRATION_PAGE.FIRSTNAME_INPUT, CREDENTIALS.REGISTRATION.Register_FIRSTNAME);
    await page.fill(SELECTORS.REGISTRATION_PAGE.LASTNAME_INPUT, CREDENTIALS.REGISTRATION.Register_LASTNAME);
    await page.fill(SELECTORS.REGISTRATION_PAGE.ADDRESS_INPUT, CREDENTIALS.REGISTRATION.Register_ADDRESS);
    await page.fill(SELECTORS.REGISTRATION_PAGE.CITY_INPUT, CREDENTIALS.REGISTRATION.Register_CITY);
    await page.fill(SELECTORS.REGISTRATION_PAGE.STATE_INPUT, CREDENTIALS.REGISTRATION.Register_STATE);
    await page.fill(SELECTORS.REGISTRATION_PAGE.ZIPCODE_INPUT, CREDENTIALS.REGISTRATION.Register_ZIPCODE);
    await page.fill(SELECTORS.REGISTRATION_PAGE.PHONE_INPUT, CREDENTIALS.REGISTRATION.Register_PHONE);
    await page.fill(SELECTORS.REGISTRATION_PAGE.SSN_INPUT, CREDENTIALS.REGISTRATION.Register_SSN);
    await page.fill(SELECTORS.REGISTRATION_PAGE.USERNAME_INPUT, CREDENTIALS.REGISTRATION.Register_USERNAME);
    await page.fill(SELECTORS.REGISTRATION_PAGE.PASSWORD_INPUT, CREDENTIALS.REGISTRATION.Register_PASSWORD);
    await page.fill(SELECTORS.REGISTRATION_PAGE.CONFIRMPASSWORD_INPUT, CREDENTIALS.REGISTRATION.Register_CONFIRMPASSWORD);
    await page.click(SELECTORS.REGISTRATION_PAGE.REGISTER_BUTTON);

    // Validate existing username error message
    await expect(page.locator(SELECTORS.REGISTRATION_PAGE.USERNAME_ERROR)).toHaveText(CREDENTIALS.REGISTRATION.Existing_Username_ErrorMessage);
  });
});