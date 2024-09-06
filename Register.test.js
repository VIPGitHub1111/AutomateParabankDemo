const { test, expect } = require('@playwright/test');
const CREDENTIALS = require('./constants');
const SELECTORS = require('./selectors');

test.describe('Parabank Registration Tests', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the registration page
    await page.goto(CREDENTIALS.REGISTRATION.REGISTER_URL);
  });

  // Test Case: Successful Registration
  test('Successful registration', async ({ page }) => {
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

    // Validate successful registration
    await expect(page.locator(SELECTORS.REGISTRATION_PAGE.SUCCESS_PANEL_XPath)).toHaveText(CREDENTIALS.REGISTRATION.SuccessRegistrationMessage);
  });

  // Test Case: Registration with Missing Required Fields
  test('Registration with missing required fields', async ({ page }) => {
  try{
    // Leaving all fields empty
    await page.click(SELECTORS.REGISTRATION_PAGE.REGISTER_BUTTON);

    //await page.setDefaultTimeout(100000);

    // Validate error messages for missing fields
    await expect(page.locator(SELECTORS.REGISTRATION_PAGE.FIRSTNAME_ERROR)).toHaveText(CREDENTIALS.REGISTRATION.Register_EmptyFIRSTNAME_ErrorMessage);
    await expect(page.locator(SELECTORS.REGISTRATION_PAGE.LASTNAME_ERROR)).toHaveText(CREDENTIALS.REGISTRATION.Register_EmptyLASTNAME_ErrorMessage);
    await expect(page.locator(SELECTORS.REGISTRATION_PAGE.ADDRESS_ERROR)).toHaveText(CREDENTIALS.REGISTRATION.Register_EmptyADDRESS_ErrorMessage);
    await expect(page.locator(SELECTORS.REGISTRATION_PAGE.CITY_ERROR)).toHaveText(CREDENTIALS.REGISTRATION.Register_EmptyCITY_ErrorMessage);
    await expect(page.locator(SELECTORS.REGISTRATION_PAGE.STATE_ERROR)).toHaveText(CREDENTIALS.REGISTRATION.Register_EmptySTATE_ErrorMessage);
    await expect(page.locator(SELECTORS.REGISTRATION_PAGE.ZIPCODE_ERROR)).toHaveText(CREDENTIALS.REGISTRATION.Register_EmptyZIPCODE_ErrorMessage);
    await expect(page.locator(SELECTORS.REGISTRATION_PAGE.SSN_ERROR)).toHaveText(CREDENTIALS.REGISTRATION.Register_EmptySSN_ErrorMessage);
    await expect(page.locator(SELECTORS.REGISTRATION_PAGE.USERNAME_ERROR)).toHaveText(CREDENTIALS.REGISTRATION.Register_EmptyUSERNAME_ErrorMessage);
    await expect(page.locator(SELECTORS.REGISTRATION_PAGE.PASSWORD_ERROR)).toHaveText(CREDENTIALS.REGISTRATION.Register_EmptyPASSWORD_ErrorMessage);
    await expect(page.locator(SELECTORS.REGISTRATION_PAGE.CONFIRMPASSWORD_ERROR)).toHaveText(CREDENTIALS.REGISTRATION.Register_EmptyCONFIRMPASSWORD_ErrorMessage);

  }catch (error) {
      // Take a screenshot if there's an error
      await page.screenshot({ path: 'registration_error.png' });
      throw error;  // Re-throw the error to ensure the test still fails
    }
  });
    

  // Test Case: Registration with Non-Matching Passwords
  test('Registration with non-matching passwords', async ({ page }) => {
    await page.fill(SELECTORS.REGISTRATION_PAGE.FIRSTNAME_INPUT, CREDENTIALS.REGISTRATION.Register_FIRSTNAME);
    await page.fill(SELECTORS.REGISTRATION_PAGE.LASTNAME_INPUT, CREDENTIALS.REGISTRATION.Register_LASTNAME);
    await page.fill(SELECTORS.REGISTRATION_PAGE.USERNAME_INPUT, CREDENTIALS.REGISTRATION.Register_USERNAME);
    await page.fill(SELECTORS.REGISTRATION_PAGE.PASSWORD_INPUT, 'password123');
    await page.fill(SELECTORS.REGISTRATION_PAGE.CONFIRMPASSWORD_INPUT, 'differentPassword');
    await page.click(SELECTORS.REGISTRATION_PAGE.REGISTER_BUTTON);

    // Validate error for password mismatch
    await expect(page.locator(SELECTORS.REGISTRATION_PAGE.CONFIRMPASSWORD_ERROR)).toHaveText(CREDENTIALS.REGISTRATION.Duplicate_ConfirmPassword_ErrorMessage);
  });
});