/**
 * Natal Correctness Tests — ALWAYS RUN
 *
 * Verifies that when a natal chart is set:
 * 1. All planet positions reflect the birth date (not today)
 * 2. Transit dates bracket the birth date (not today)
 * 3. House cusps are computed for the birth location
 * 4. Live auto-update timer does NOT overwrite natal data
 * 5. natalMode flag is true
 * 6. Info panel shows correct natal-date information
 */
import { test, expect } from '@playwright/test';
import { waitForRender } from './fixtures/wait-for-render';

const SIGN_NAMES = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces',
] as const;

// Reference birth chart: June 15, 1990, 14:30 UTC, Wuhan (30.5928, 114.3055)
const NATAL = {
  year: 1990, month: 6, day: 15, hour: 14, minute: 30,
  lat: 30.5928, lng: 114.3055, timezone: 'Asia/Shanghai',
};

// Known planetary positions for 1990-06-15 ~14:30 UTC (from astronomy-engine)
// Sun: ~84° (Gemini, signIndex=2), Moon moves fast so allow wider range
const EXPECTED = {
  Sun:     { signName: 'Gemini',      signIndex: 2,  lonRange: [82, 86] },
  Moon:    { signName: null,           signIndex: null, lonRange: null }, // Moon moves fast, skip exact check
  Mercury: { signName: 'Cancer',      signIndex: 3,  lonRange: [90, 120] },
  Venus:   { signName: null,          signIndex: null, lonRange: null }, // Just verify it's not today's value
  Mars:    { signName: null,          signIndex: null, lonRange: null },
  Jupiter: { signName: 'Cancer',      signIndex: 3,  lonRange: [90, 120] },
  Saturn:  { signName: 'Capricorn',   signIndex: 9,  lonRange: [280, 300] },
};

test.describe('Natal Chart Correctness', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForRender(page);
  });

  test('natal chart sets natalMode = true and houses are computed', async ({ page }) => {
    const state = await page.evaluate((n) => {
      const app = (window as any).__APP__;
      app.setNatalChart({
        year: n.year, month: n.month, day: n.day,
        hour: n.hour, minute: n.minute,
        lat: n.lat, lng: n.lng, timezone: n.timezone,
      });
      const s = app.store.getState();
      return {
        natalMode: s.natalMode,
        hasHouses: s.houses !== null,
        houseCuspCount: s.houses?.cusps?.length ?? 0,
        ascendant: s.houses?.ascendant ?? -1,
        mc: s.houses?.mc ?? -1,
        latitude: s.latitude,
        longitude: s.longitude,
      };
    }, NATAL);

    expect(state.natalMode).toBe(true);
    expect(state.hasHouses).toBe(true);
    expect(state.houseCuspCount).toBe(12);
    expect(state.ascendant).toBeGreaterThanOrEqual(0);
    expect(state.ascendant).toBeLessThan(360);
    expect(state.mc).toBeGreaterThanOrEqual(0);
    expect(state.mc).toBeLessThan(360);
    expect(state.latitude).toBeCloseTo(NATAL.lat, 2);
    expect(state.longitude).toBeCloseTo(NATAL.lng, 2);
  });

  test('planet positions reflect birth date, not today', async ({ page }) => {
    const data = await page.evaluate((n) => {
      const app = (window as any).__APP__;
      app.setNatalChart({
        year: n.year, month: n.month, day: n.day,
        hour: n.hour, minute: n.minute,
        lat: n.lat, lng: n.lng, timezone: n.timezone,
      });
      const positions = app.store.getState().planetPositions;
      const result: Record<string, { longitude: number; signIndex: number; signDegree: number }> = {};
      for (const [id, pos] of positions.entries()) {
        result[id] = { longitude: (pos as any).longitude, signIndex: (pos as any).signIndex, signDegree: (pos as any).signDegree };
      }
      return result;
    }, NATAL);

    // Sun must be in Gemini (~84°) for June 15, 1990
    expect(data['Sun'].signIndex).toBe(EXPECTED.Sun.signIndex);
    expect(data['Sun'].longitude).toBeGreaterThanOrEqual(EXPECTED.Sun.lonRange![0]);
    expect(data['Sun'].longitude).toBeLessThanOrEqual(EXPECTED.Sun.lonRange![1]);

    // Jupiter in Cancer for mid-1990
    expect(data['Jupiter'].signIndex).toBe(EXPECTED.Jupiter.signIndex);
    expect(data['Jupiter'].longitude).toBeGreaterThanOrEqual(EXPECTED.Jupiter.lonRange![0]);
    expect(data['Jupiter'].longitude).toBeLessThanOrEqual(EXPECTED.Jupiter.lonRange![1]);

    // Saturn in Capricorn for mid-1990
    expect(data['Saturn'].signIndex).toBe(EXPECTED.Saturn.signIndex);
    expect(data['Saturn'].longitude).toBeGreaterThanOrEqual(EXPECTED.Saturn.lonRange![0]);
    expect(data['Saturn'].longitude).toBeLessThanOrEqual(EXPECTED.Saturn.lonRange![1]);

    // All 10 planets must be present
    expect(Object.keys(data).length).toBe(10);

    await page.screenshot({ path: 'tests/screenshots/natal-positions.png' });
  });

  test('transit dates bracket the birth date, not today', async ({ page }) => {
    const data = await page.evaluate((n) => {
      const app = (window as any).__APP__;
      app.setNatalChart({
        year: n.year, month: n.month, day: n.day,
        hour: n.hour, minute: n.minute,
        lat: n.lat, lng: n.lng, timezone: n.timezone,
      });
      // Select Sun to trigger transit calculation
      app.selectPlanet('Sun');
      const s = app.store.getState();
      const transit = s.currentTransit;
      return {
        signIndex: transit?.signIndex,
        startYear: transit ? new Date(transit.startDate).getFullYear() : null,
        endYear: transit ? new Date(transit.endDate).getFullYear() : null,
        startMs: transit ? new Date(transit.startDate).getTime() : null,
        endMs: transit ? new Date(transit.endDate).getTime() : null,
        dateMs: s.date.getTime(),
      };
    }, NATAL);

    // Sun transit for June 15, 1990 should be in 1990 (Gemini: ~May 21 to ~Jun 21)
    expect(data.signIndex).toBe(2); // Gemini
    expect(data.startYear).toBe(1990);
    expect(data.endYear).toBe(1990);

    // Transit must bracket the birth date: startDate <= birthDate <= endDate
    expect(data.startMs).toBeLessThanOrEqual(data.dateMs!);
    expect(data.endMs).toBeGreaterThanOrEqual(data.dateMs!);
  });

  test('Jupiter transit dates are in early 1990s, not 2020s', async ({ page }) => {
    const data = await page.evaluate((n) => {
      const app = (window as any).__APP__;
      app.setNatalChart({
        year: n.year, month: n.month, day: n.day,
        hour: n.hour, minute: n.minute,
        lat: n.lat, lng: n.lng, timezone: n.timezone,
      });
      app.selectPlanet('Jupiter');
      const s = app.store.getState();
      const transit = s.currentTransit;
      return {
        signIndex: transit?.signIndex,
        startYear: transit ? new Date(transit.startDate).getFullYear() : null,
        endYear: transit ? new Date(transit.endDate).getFullYear() : null,
        startMs: transit ? new Date(transit.startDate).getTime() : null,
        endMs: transit ? new Date(transit.endDate).getTime() : null,
        dateMs: s.date.getTime(),
      };
    }, NATAL);

    // Jupiter was in Cancer in mid-1990
    expect(data.signIndex).toBe(3); // Cancer
    // Transit dates must be in late 1980s/early 1990s, NOT 2024/2025
    expect(data.startYear).toBeLessThan(1991);
    expect(data.endYear).toBeLessThan(1992);

    // Transit must bracket the birth date
    expect(data.startMs).toBeLessThanOrEqual(data.dateMs!);
    expect(data.endMs).toBeGreaterThanOrEqual(data.dateMs!);
  });

  test('dignity is computed for selected natal planet', async ({ page }) => {
    const data = await page.evaluate((n) => {
      const app = (window as any).__APP__;
      app.setNatalChart({
        year: n.year, month: n.month, day: n.day,
        hour: n.hour, minute: n.minute,
        lat: n.lat, lng: n.lng, timezone: n.timezone,
      });
      app.selectPlanet('Sun');
      const s = app.store.getState();
      return {
        dignity: s.selectedDignity,
        signIndex: s.planetPositions.get('Sun')?.signIndex,
      };
    }, NATAL);

    // Sun in Gemini = peregrine (no dignity)
    expect(data.signIndex).toBe(2); // Gemini
    expect(data.dignity).toBeTruthy(); // Should have some dignity status
  });

  test('live auto-update does NOT overwrite natal data after 3 seconds', async ({ page }) => {
    // Set natal chart and record initial state
    const initial = await page.evaluate((n) => {
      const app = (window as any).__APP__;
      app.setNatalChart({
        year: n.year, month: n.month, day: n.day,
        hour: n.hour, minute: n.minute,
        lat: n.lat, lng: n.lng, timezone: n.timezone,
      });
      const s = app.store.getState();
      return {
        dateMs: s.date.getTime(),
        sunLon: s.planetPositions.get('Sun')?.longitude,
        natalMode: s.natalMode,
        latitude: s.latitude,
      };
    }, NATAL);

    expect(initial.natalMode).toBe(true);

    // Wait 3+ seconds — the 1-second auto-update timer fires at least twice
    await page.waitForTimeout(3500);

    // Re-read state — it must NOT have changed
    const after = await page.evaluate(() => {
      const s = (window as any).__APP__.store.getState();
      return {
        dateMs: s.date.getTime(),
        sunLon: s.planetPositions.get('Sun')?.longitude,
        natalMode: s.natalMode,
        latitude: s.latitude,
      };
    });

    // Date should still be 1990, not now
    expect(after.dateMs).toBe(initial.dateMs);
    expect(after.sunLon).toBe(initial.sunLon);
    expect(after.natalMode).toBe(true);
    expect(after.latitude).toBeCloseTo(NATAL.lat, 2);
  });

  test('store date is the birth date, not today', async ({ page }) => {
    const data = await page.evaluate((n) => {
      const app = (window as any).__APP__;
      app.setNatalChart({
        year: n.year, month: n.month, day: n.day,
        hour: n.hour, minute: n.minute,
        lat: n.lat, lng: n.lng, timezone: n.timezone,
      });
      const d = app.store.getState().date;
      return {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate(),
      };
    }, NATAL);

    expect(data.year).toBe(NATAL.year);
    expect(data.month).toBe(NATAL.month);
    expect(data.day).toBe(NATAL.day);
  });

  test('transit badge shows Natal in natal mode', async ({ page }) => {
    await page.evaluate((n) => {
      const app = (window as any).__APP__;
      app.setNatalChart({
        year: n.year, month: n.month, day: n.day,
        hour: n.hour, minute: n.minute,
        lat: n.lat, lng: n.lng, timezone: n.timezone,
      });
    }, NATAL);

    await page.waitForTimeout(200);

    // Check the natal/transit badge text in the toolbar
    const badgeText = await page.evaluate(() => {
      // Find spans in the toolbar area
      const spans = document.querySelectorAll('span');
      const visible: string[] = [];
      spans.forEach(s => {
        if (s.style.display !== 'none' && s.textContent?.includes('Natal')) {
          visible.push(s.textContent!);
        }
      });
      return visible;
    });

    expect(badgeText.length).toBeGreaterThan(0);
    expect(badgeText.some(t => t.includes('Natal'))).toBe(true);
  });

  test('info panel shows natal-era data when planet selected', async ({ page }) => {
    await page.evaluate((n) => {
      const app = (window as any).__APP__;
      app.setNatalChart({
        year: n.year, month: n.month, day: n.day,
        hour: n.hour, minute: n.minute,
        lat: n.lat, lng: n.lng, timezone: n.timezone,
      });
      app.selectPlanet('Sun');
    }, NATAL);

    await page.waitForTimeout(300);

    const panelText = await page.evaluate(
      () => document.getElementById('info-panel')?.textContent ?? ''
    );

    // Info panel should mention Gemini (Sun's sign in June 1990)
    expect(panelText).toContain('Gemini');
    // Should show 1990 transit dates, not 2025/2026
    expect(panelText).toContain('1990');
    // Should NOT contain current year
    expect(panelText).not.toContain('2026');

    await page.screenshot({ path: 'tests/screenshots/natal-info-panel.png' });
  });

  test('all planet transits bracket the natal date', async ({ page }) => {
    const planets = ['Sun', 'Mars', 'Jupiter', 'Saturn'];

    for (const planet of planets) {
      const data = await page.evaluate(({ n, p }) => {
        const app = (window as any).__APP__;
        app.setNatalChart({
          year: n.year, month: n.month, day: n.day,
          hour: n.hour, minute: n.minute,
          lat: n.lat, lng: n.lng, timezone: n.timezone,
        });
        app.selectPlanet(p);
        const s = app.store.getState();
        const transit = s.currentTransit;
        return {
          planet: p,
          startMs: transit ? new Date(transit.startDate).getTime() : null,
          endMs: transit ? new Date(transit.endDate).getTime() : null,
          dateMs: s.date.getTime(),
        };
      }, { n: NATAL, p: planet });

      expect(data.startMs, `${planet} transit start should be <= birth date`).toBeLessThanOrEqual(data.dateMs!);
      expect(data.endMs, `${planet} transit end should be >= birth date`).toBeGreaterThanOrEqual(data.dateMs!);
    }
  });

  test('switching back to transit mode (Now button) resets to live time', async ({ page }) => {
    // First set natal mode
    await page.evaluate((n) => {
      const app = (window as any).__APP__;
      app.setNatalChart({
        year: n.year, month: n.month, day: n.day,
        hour: n.hour, minute: n.minute,
        lat: n.lat, lng: n.lng, timezone: n.timezone,
      });
    }, NATAL);

    await page.waitForTimeout(200);

    // Verify natal mode is active
    const natalState = await page.evaluate(
      () => (window as any).__APP__.store.getState().natalMode
    );
    expect(natalState).toBe(true);

    // Click "Now" button to switch back to transit mode
    const todayBtn = page.locator('[data-testid="today-btn"]');
    await todayBtn.click();
    await page.waitForTimeout(500);

    const afterNow = await page.evaluate(() => {
      const s = (window as any).__APP__.store.getState();
      return {
        natalMode: s.natalMode,
        hasHouses: s.houses !== null,
        year: s.date.getFullYear(),
      };
    });

    // Should no longer be in natal mode
    expect(afterNow.natalMode).toBe(false);
    expect(afterNow.hasHouses).toBe(false);
    // Date should be current year (2026), not 1990
    expect(afterNow.year).toBeGreaterThanOrEqual(2025);
  });
});

test.describe('Transit Mode Correctness', () => {
  test('transit mode shows Transit badge', async ({ page }) => {
    await page.goto('/');
    await waitForRender(page);

    const badgeText = await page.evaluate(() => {
      const spans = document.querySelectorAll('span');
      const visible: string[] = [];
      spans.forEach(s => {
        if (s.style.display !== 'none' && s.textContent?.includes('Transit')) {
          visible.push(s.textContent!);
        }
      });
      return visible;
    });

    expect(badgeText.length).toBeGreaterThan(0);
    expect(badgeText.some(t => t.includes('Transit'))).toBe(true);
  });

  test('transit mode planet positions reflect current date', async ({ page }) => {
    await page.goto('/');
    await waitForRender(page);

    const data = await page.evaluate(() => {
      const s = (window as any).__APP__.store.getState();
      return {
        year: s.date.getFullYear(),
        natalMode: s.natalMode,
        sunLon: s.planetPositions.get('Sun')?.longitude,
        sunSign: s.planetPositions.get('Sun')?.signIndex,
      };
    });

    // Should be current year
    expect(data.year).toBeGreaterThanOrEqual(2025);
    expect(data.natalMode).toBe(false);
    // Sun should have a valid position
    expect(data.sunLon).toBeGreaterThanOrEqual(0);
    expect(data.sunLon).toBeLessThan(360);
  });

  test('manually set date disables auto-update', async ({ page }) => {
    await page.goto('/');
    await waitForRender(page);

    // Set a date in the past (not natal, just transit for a different date)
    const initial = await page.evaluate(() => {
      const app = (window as any).__APP__;
      app.setDate(2020, 6, 15, 12, 0);
      const s = app.store.getState();
      return {
        dateMs: s.date.getTime(),
        year: s.date.getFullYear(),
      };
    });

    expect(initial.year).toBe(2020);

    // Wait 3 seconds for auto-update timer
    await page.waitForTimeout(3500);

    const after = await page.evaluate(() => {
      const s = (window as any).__APP__.store.getState();
      return {
        dateMs: s.date.getTime(),
        year: s.date.getFullYear(),
      };
    });

    // Date must still be 2020, not updated to now
    expect(after.dateMs).toBe(initial.dateMs);
    expect(after.year).toBe(2020);
  });
});
