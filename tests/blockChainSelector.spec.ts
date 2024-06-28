import { test, expect } from '@playwright/test';

test.describe('BlockchainSelector Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('renders the select dropdown', async ({ page }) => {
    await page.waitForSelector('select', { state: 'attached' });
    const select = page.locator('select');
    await expect(select).toBeVisible();
  });

  test('shows the correct options', async ({ page }) => {
    await page.waitForSelector('select', { state: 'attached' });
    const options = page.locator('select > option');
    await expect(options).toHaveCount(5);
    await expect(options.nth(0)).toHaveText('AVAX');
    await expect(options.nth(1)).toHaveText('USDC');
    await expect(options.nth(2)).toHaveText('WAVAX');
    await expect(options.nth(3)).toHaveText('WBNB');
    await expect(options.nth(4)).toHaveText('STG');
  });

  test('handles change correctly', async ({ page }) => {
    await page.waitForSelector('select', { state: 'attached' });
    const select = page.locator('select');
    await select.selectOption('USDC');
    await expect(select).toHaveValue('USDC');
  });
});
