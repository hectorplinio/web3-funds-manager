import { test, expect } from '@playwright/test';

test.describe('Card Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders Crypto Wallet title', async ({ page }) => {
    await expect(page.locator('text=Crypto Wallet')).toBeVisible();
  });

  test('shows balance and blockchain', async ({ page }) => {
    await page.waitForTimeout(2000);
    await expect(page.locator('text=Balance:')).toBeVisible();
  });

  test('handles Send and Receive button clicks', async ({ page }) => {
    await page.locator('text=Send').click();
    await expect(page.locator('input[placeholder="Amount"]')).toBeVisible();

    await page.locator('text=Receive').click();
    await expect(page.locator('text=Your public address:')).toBeVisible();
  });

  test('shows the correct form when clicking buttons', async ({ page }) => {
    await page.locator('text=Send').click();
    await expect(page.locator('input[placeholder="Amount"]')).toBeVisible();

    await page.locator('text=Receive').click();
    await expect(page.locator('text=Your public address:')).toBeVisible();
  });
});
