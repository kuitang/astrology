import type { Page } from '@playwright/test';

export async function waitForRender(page: Page): Promise<void> {
  await page.waitForSelector('canvas', { timeout: 30000 });
  await page.waitForFunction(
    () => (window as Record<string, unknown>).__APP_READY__ === true,
    null,
    { timeout: 30000 }
  );
  // Extra frames for render + HMR stability
  await page.waitForTimeout(2000);
}
