import { test, expect } from '@playwright/test';
import { waitForRender } from './fixtures/wait-for-render';

test('no console errors on load', async ({ page }) => {
  await page.goto('/');
  await waitForRender(page);
  const errors = await page.evaluate(() => (window as any).__CONSOLE_ERRORS__ || []);
  // Filter out WebGL driver messages (expected in headless)
  const real = errors.filter((e: string) => !e.includes('WebGL') && !e.includes('GL Driver'));
  expect(real).toHaveLength(0);
});

test('mobile viewport renders and is usable', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await waitForRender(page);
  // Select a planet
  await page.evaluate(() => (window as any).__APP__.selectPlanet('Mars'));
  await page.waitForTimeout(200);
  await page.screenshot({ path: 'tests/screenshots/p5-mobile-info.png' });
  // Info panel should be visible
  const display = await page.evaluate(
    () => document.getElementById('info-panel')?.style.display
  );
  expect(display).toBe('block');
});

test('canvas fills viewport', async ({ page }) => {
  await page.goto('/');
  await waitForRender(page);
  const { w, h } = await page.evaluate(() => {
    const c = document.querySelector('canvas')!;
    return { w: c.clientWidth, h: c.clientHeight };
  });
  const viewport = page.viewportSize()!;
  expect(w).toBe(viewport.width);
  expect(h).toBe(viewport.height);
});

test('planet positions update when date changes', async ({ page }) => {
  await page.goto('/');
  await waitForRender(page);
  const lon1 = await page.evaluate(
    () => (window as any).__APP__.store.getState().planetPositions.get('Sun').longitude
  );
  await page.evaluate(() => (window as any).__APP__.setDate(2020, 6, 21, 12, 0));
  await page.waitForTimeout(200);
  const lon2 = await page.evaluate(
    () => (window as any).__APP__.store.getState().planetPositions.get('Sun').longitude
  );
  expect(lon1).not.toBeCloseTo(lon2, 0);
});
