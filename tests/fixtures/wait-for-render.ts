import type { Page } from '@playwright/test';

export async function waitForRender(page: Page): Promise<void> {
  await page.waitForSelector('canvas', { timeout: 10000 });
  await page.waitForFunction(
    () => (window as Record<string, unknown>).__APP_READY__ === true,
    null,
    { timeout: 10000 }
  );
  // Extra frame for render to complete
  await page.waitForTimeout(500);
}
