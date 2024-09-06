const { test, expect } = require('@playwright/test');
const CREDENTIALS = require('./constants');
const SELECTORS = require('./selectors');

   // Test Case: Check navigation for Forgot Login Info Link
   test('Check navigation for Forgot Login Info Link', async ({ page }) => {
    await page.goto(CREDENTIALS.LOGIN_URL);
  
    // Wait for Link to be visible before interacting
    await page.waitForSelector(SELECTORS.LOGIN_PAGE.FORGOT_LOGIN_INFO_LINK_XPath);
      
    // Click on Forgot Login Info Link
    await page.click(SELECTORS.LOGIN_PAGE.FORGOT_LOGIN_INFO_LINK_XPath);
  
    // Wait for the Forgot Login Info page to appear
    await page.goto(CREDENTIALS.FORGOT_LOGIN_INFO.Forgot_Login_Info_URL);
  });
  // Test Case: Check navigation for REGISTER Link
  test('Check navigation for REGISTER Link', async ({ page }) => {
    await page.goto(CREDENTIALS.LOGIN_URL);
  
    // Wait for Link to be visible before interacting
    await page.waitForSelector(SELECTORS.LOGIN_PAGE.REGISTER_LINK_XPath);
      
    // Click on REGISTER Link
    await page.click(SELECTORS.LOGIN_PAGE.REGISTER_LINK_XPath);
  
    // Wait for the REGISTRATION page to appear
    await page.goto(CREDENTIALS.REGISTRATION.REGISTER_URL);
  });