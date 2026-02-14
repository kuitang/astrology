import { test, expect } from '@playwright/test';
import { waitForRender } from './fixtures/wait-for-render';

test('natal chart shows 12 house cusps', async ({ page }) => {
  await page.goto('/');
  await waitForRender(page);
  await page.evaluate(() => (window as any).__APP__.setNatalChart({
    year: 1990, month: 6, day: 15, hour: 14, minute: 30,
    lat: 40.7128, lng: -74.006, timezone: 'America/New_York'
  }));
  await page.waitForTimeout(200);
  const houses = await page.evaluate(
    () => (window as any).__APP__.store.getState().houses?.cusps
  );
  expect(houses).toHaveLength(12);
  await page.screenshot({ path: 'tests/screenshots/p3-natal-houses.png' });
});

test('ascendant and MC are computed', async ({ page }) => {
  await page.goto('/');
  await waitForRender(page);
  await page.evaluate(() => (window as any).__APP__.setNatalChart({
    year: 1990, month: 6, day: 15, hour: 14, minute: 30,
    lat: 40.7128, lng: -74.006, timezone: 'America/New_York'
  }));
  await page.waitForTimeout(200);
  const houses = await page.evaluate(() => {
    const h = (window as any).__APP__.store.getState().houses;
    return { asc: h?.ascendant, mc: h?.mc };
  });
  expect(houses.asc).toBeGreaterThanOrEqual(0);
  expect(houses.asc).toBeLessThan(360);
  expect(houses.mc).toBeGreaterThanOrEqual(0);
  expect(houses.mc).toBeLessThan(360);
});

test('whole sign cusps are 30 degrees apart', async ({ page }) => {
  await page.goto('/');
  await waitForRender(page);
  await page.evaluate(() => (window as any).__APP__.setNatalChart({
    year: 2000, month: 1, day: 1, hour: 12, minute: 0,
    lat: 51.5074, lng: -0.1278, timezone: 'Europe/London'
  }));
  await page.waitForTimeout(200);
  const cusps: number[] = await page.evaluate(
    () => (window as any).__APP__.store.getState().houses?.cusps
  );
  for (let i = 0; i < 12; i++) {
    const next = (i + 1) % 12;
    let diff = cusps[next]! - cusps[i]!;
    if (diff < 0) diff += 360;
    expect(diff).toBeCloseTo(30, 1);
  }
});
