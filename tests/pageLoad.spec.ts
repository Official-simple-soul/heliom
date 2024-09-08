import { test, expect } from '@playwright/test';

test.describe('LMS', () => {
  test('should open the url', async ({ page }) => {
    // Navigate to the login page
    await page.goto('http://lms2.kodehauz.dev/');

    // Check if the "Log in to dashboard" text is visible
    await expect(page).toHaveTitle(/Create Next App/);
  });
});
