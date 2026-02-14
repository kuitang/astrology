import { test, expect } from '@playwright/test';
import { waitForRender } from './fixtures/wait-for-render';

test('app loads with Earth and stars', async ({ page }) => {
  await page.goto('/');
  await waitForRender(page);
  await page.screenshot({ path: 'tests/screenshots/p1-earth-stars.png' });
  const canvas = await page.$('canvas');
  expect(canvas).toBeTruthy();
});

test('zodiac belt has 12 segments', async ({ page }) => {
  await page.goto('/');
  await waitForRender(page);
  const segments = await page.evaluate(
    () => (window as any).__APP__.store.getState().zodiacSegmentCount
  );
  expect(segments).toBe(12);
});

test('planets at correct positions for known date', async ({ page }) => {
  await page.goto('/');
  await waitForRender(page);
  await page.evaluate(() => (window as any).__APP__.setDate(2000, 1, 1, 12, 0));
  await page.waitForTimeout(200);
  const sunLon = await page.evaluate(
    () => (window as any).__APP__.store.getState().planetPositions.get('Sun').longitude
  );
  expect(sunLon).toBeCloseTo(280.46, 0);
  await page.screenshot({ path: 'tests/screenshots/p1-planets-j2000.png' });
});

test('all 10 planets rendered', async ({ page }) => {
  await page.goto('/');
  await waitForRender(page);
  const count = await page.evaluate(
    () => (window as any).__APP__.store.getState().planetPositions.size
  );
  expect(count).toBe(10);
});

test('constellation stick figures visible', async ({ page }) => {
  await page.goto('/');
  await waitForRender(page);
  const constellationCount = await page.evaluate(
    () => (window as any).__APP__.scene.constellationGroup.children.length
  );
  expect(constellationCount).toBeGreaterThan(0);
  await page.screenshot({ path: 'tests/screenshots/p1-constellations.png' });
});

test('date picker updates planet positions', async ({ page }) => {
  await page.goto('/');
  await waitForRender(page);
  const before = await page.evaluate(
    () => (window as any).__APP__.store.getState().planetPositions.get('Mars').longitude
  );
  await page.evaluate(() => (window as any).__APP__.setDate(1990, 6, 15, 12, 0));
  await page.waitForTimeout(200);
  const after = await page.evaluate(
    () => (window as any).__APP__.store.getState().planetPositions.get('Mars').longitude
  );
  expect(before).not.toBeCloseTo(after, 0);
});
