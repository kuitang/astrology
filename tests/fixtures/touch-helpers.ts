import type { Page } from '@playwright/test';

export async function tap(page: Page, x: number, y: number): Promise<void> {
  await page.mouse.click(x, y);
}

export async function pinchZoom(
  page: Page, centerX: number, centerY: number,
  startDistance: number, endDistance: number
): Promise<void> {
  await page.evaluate(
    ({ cx, cy, sd, ed }) => {
      const canvas = document.querySelector('canvas')!;
      const steps = 10;
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const dist = sd + (ed - sd) * t;
        const touch1 = new Touch({
          identifier: 0,
          target: canvas,
          clientX: cx - dist / 2,
          clientY: cy,
        });
        const touch2 = new Touch({
          identifier: 1,
          target: canvas,
          clientX: cx + dist / 2,
          clientY: cy,
        });
        const type = i === 0 ? 'touchstart' : i === steps ? 'touchend' : 'touchmove';
        canvas.dispatchEvent(new TouchEvent(type, {
          touches: type === 'touchend' ? [] : [touch1, touch2],
          changedTouches: [touch1, touch2],
          bubbles: true,
        }));
      }
    },
    { cx: centerX, cy: centerY, sd: startDistance, ed: endDistance }
  );
}

export async function dragOrbit(
  page: Page, startX: number, startY: number,
  endX: number, endY: number
): Promise<void> {
  await page.mouse.move(startX, startY);
  await page.mouse.down();
  const steps = 10;
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    await page.mouse.move(
      startX + (endX - startX) * t,
      startY + (endY - startY) * t
    );
  }
  await page.mouse.up();
}
