import { test, expect } from '@playwright/test';
import { waitForRender } from './fixtures/wait-for-render';
import { dragOrbit } from './fixtures/touch-helpers';

test('select planet shows info panel', async ({ page }) => {
  await page.goto('/');
  await waitForRender(page);
  await page.evaluate(() => (window as any).__APP__.selectPlanet('Jupiter'));
  await page.waitForTimeout(200);
  const selected = await page.evaluate(
    () => (window as any).__APP__.store.getState().selectedObject
  );
  expect(selected?.type).toBe('planet');
  expect(selected?.id).toBe('Jupiter');
  const display = await page.evaluate(
    () => document.getElementById('info-panel')?.style.display
  );
  expect(display).toBe('block');
  await page.screenshot({ path: 'tests/screenshots/p2-planet-selected.png' });
});

test('select sign shows sign info', async ({ page }) => {
  await page.goto('/');
  await waitForRender(page);
  await page.evaluate(() => {
    (window as any).__APP__.store.setState({ selectedObject: { type: 'sign', id: '4' } });
  });
  await page.waitForTimeout(200);
  await page.screenshot({ path: 'tests/screenshots/p2-sign-selected.png' });
  const panelText = await page.evaluate(
    () => document.getElementById('info-panel')?.textContent
  );
  expect(panelText).toContain('Leo');
});

test('deselect hides info panel', async ({ page }) => {
  await page.goto('/');
  await waitForRender(page);
  await page.evaluate(() => (window as any).__APP__.selectPlanet('Mars'));
  await page.waitForTimeout(100);
  await page.evaluate(() => {
    (window as any).__APP__.store.setState({ selectedObject: null });
  });
  await page.waitForTimeout(100);
  const display = await page.evaluate(
    () => document.getElementById('info-panel')?.style.display
  );
  expect(display).toBe('none');
});

test('orbit drag changes camera position', async ({ page }) => {
  await page.goto('/');
  await waitForRender(page);
  await page.screenshot({ path: 'tests/screenshots/p2-before-orbit.png' });
  await dragOrbit(page, 400, 300, 600, 200);
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'tests/screenshots/p2-after-orbit.png' });
});

test('mobile viewport renders', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await waitForRender(page);
  await page.screenshot({ path: 'tests/screenshots/p2-mobile-viewport.png' });
  const canvas = await page.evaluate(() => {
    const c = document.querySelector('canvas');
    return c ? { w: c.clientWidth, h: c.clientHeight } : null;
  });
  expect(canvas).toBeTruthy();
  expect(canvas!.w).toBe(375);
});
