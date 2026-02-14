import { describe, it, expect } from 'vitest';
import { findCurrentTransit } from '../../src/ephemeris/transits.js';

const SIGN_NAMES = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces',
] as const;

/**
 * Helper: assert a date is within `toleranceDays` of an expected date.
 */
function expectDateNear(actual: Date, expected: Date, toleranceDays: number) {
  const diffMs = Math.abs(actual.getTime() - expected.getTime());
  const diffDays = diffMs / 86400000;
  expect(diffDays).toBeLessThanOrEqual(toleranceDays);
}

describe('findCurrentTransit - slow-moving outer planets', () => {
  // Known transit facts used for verification:
  // - Jupiter entered Gemini May 25, 2024 -> Cancer June 9, 2025
  // - Saturn entered Pisces March 7, 2023 -> Aries May 24, 2025
  // - Uranus entered Taurus March 6, 2019 (permanent) -> Gemini July 7, 2025
  // - Neptune entered Pisces Feb 3, 2012 (permanent re-entry) -> Aries March 30, 2025
  // - Pluto entered Aquarius Nov 19, 2024 (permanent) -> Pisces ~March 8, 2043

  const TOLERANCE_DAYS = 5;

  it('Jupiter in Gemini: May 25, 2024 to June 9, 2025', () => {
    const queryDate = new Date(Date.UTC(2025, 0, 1, 12, 0, 0)); // Jan 1, 2025
    const transit = findCurrentTransit('Jupiter', queryDate);

    expect(SIGN_NAMES[transit.signIndex]).toBe('Gemini');
    expectDateNear(transit.startDate, new Date(Date.UTC(2024, 4, 25)), TOLERANCE_DAYS);
    expectDateNear(transit.endDate, new Date(Date.UTC(2025, 5, 9)), TOLERANCE_DAYS);
  });

  it('Saturn in Pisces: March 7, 2023 to May 24, 2025', () => {
    const queryDate = new Date(Date.UTC(2025, 0, 1, 12, 0, 0)); // Jan 1, 2025
    const transit = findCurrentTransit('Saturn', queryDate);

    expect(SIGN_NAMES[transit.signIndex]).toBe('Pisces');
    expectDateNear(transit.startDate, new Date(Date.UTC(2023, 2, 7)), TOLERANCE_DAYS);
    expectDateNear(transit.endDate, new Date(Date.UTC(2025, 4, 24)), TOLERANCE_DAYS);
  });

  it('Uranus in Taurus: March 6, 2019 (permanent) to July 7, 2025', () => {
    const queryDate = new Date(Date.UTC(2025, 0, 1, 12, 0, 0)); // Jan 1, 2025
    const transit = findCurrentTransit('Uranus', queryDate);

    expect(SIGN_NAMES[transit.signIndex]).toBe('Taurus');
    expectDateNear(transit.startDate, new Date(Date.UTC(2019, 2, 6)), TOLERANCE_DAYS);
    expectDateNear(transit.endDate, new Date(Date.UTC(2025, 6, 7)), TOLERANCE_DAYS);
  });

  it('Neptune in Pisces: permanent ingress ~Feb 2012, exits March 30, 2025', () => {
    // Neptune first entered Pisces April 4, 2011, retrograded to Aquarius,
    // then permanently re-entered Pisces around Feb 3, 2012.
    // The algorithm finds the permanent ingress.
    const queryDate = new Date(Date.UTC(2025, 0, 1, 12, 0, 0)); // Jan 1, 2025
    const transit = findCurrentTransit('Neptune', queryDate);

    expect(SIGN_NAMES[transit.signIndex]).toBe('Pisces');
    expectDateNear(transit.startDate, new Date(Date.UTC(2012, 1, 3)), TOLERANCE_DAYS);
    expectDateNear(transit.endDate, new Date(Date.UTC(2025, 2, 30)), TOLERANCE_DAYS);
  });

  it('Pluto in Aquarius: Nov 19, 2024 to ~March 8, 2043', () => {
    // This is the key test case for the bug fix.
    // Previously, the end date was returned as today's date because
    // the 730-day search window was too short for Pluto.
    const queryDate = new Date(Date.UTC(2025, 0, 1, 12, 0, 0)); // Jan 1, 2025
    const transit = findCurrentTransit('Pluto', queryDate);

    expect(SIGN_NAMES[transit.signIndex]).toBe('Aquarius');
    expectDateNear(transit.startDate, new Date(Date.UTC(2024, 10, 19)), TOLERANCE_DAYS);
    // Pluto enters Pisces around March 8, 2043 -- allow wider tolerance (30 days)
    // since exact date varies by source
    expectDateNear(transit.endDate, new Date(Date.UTC(2043, 2, 8)), 30);
  });

  it('Pluto end date is NOT today (regression test for the original bug)', () => {
    const queryDate = new Date(Date.UTC(2025, 0, 1, 12, 0, 0));
    const transit = findCurrentTransit('Pluto', queryDate);

    // The bug was: endDate === queryDate because the search window was too short
    const diffMs = Math.abs(transit.endDate.getTime() - queryDate.getTime());
    const diffDays = diffMs / 86400000;
    // The end date should be years away, not 0 days
    expect(diffDays).toBeGreaterThan(365);
  });
});

describe('findCurrentTransit - fast-moving planets', () => {
  it('Sun transit lasts approximately 30 days', () => {
    const queryDate = new Date(Date.UTC(2025, 0, 15, 12, 0, 0)); // Jan 15, 2025
    const transit = findCurrentTransit('Sun', queryDate);

    const durationDays =
      (transit.endDate.getTime() - transit.startDate.getTime()) / 86400000;
    // Sun spends about 30 days in each sign
    expect(durationDays).toBeGreaterThan(25);
    expect(durationDays).toBeLessThan(35);
  });
});

describe('findCurrentTransit - natal date vs today alignment', () => {
  // The critical bug: transits must reflect the query date, not today's date.
  // When viewing a natal chart for 1990-06-15, the Sun should be in Gemini
  // (not whatever sign it's in today).

  it('natal date 1990-06-15: Sun in Gemini, transit dates in 1990', () => {
    const natalDate = new Date(Date.UTC(1990, 5, 15, 14, 30, 0)); // Jun 15 1990 14:30 UTC
    const transit = findCurrentTransit('Sun', natalDate);

    expect(SIGN_NAMES[transit.signIndex]).toBe('Gemini');
    // Sun enters Gemini ~May 21 and leaves ~Jun 21
    expect(transit.startDate.getFullYear()).toBe(1990);
    expect(transit.endDate.getFullYear()).toBe(1990);
    expectDateNear(transit.startDate, new Date(Date.UTC(1990, 4, 21)), 3);
    expectDateNear(transit.endDate, new Date(Date.UTC(1990, 5, 21)), 3);
  });

  it('natal date 1990-06-15: Jupiter transit dates are in the early 1990s', () => {
    const natalDate = new Date(Date.UTC(1990, 5, 15, 14, 30, 0));
    const transit = findCurrentTransit('Jupiter', natalDate);

    // Jupiter was in Cancer in mid-1990. Transit dates should be ~1989-1990.
    expect(SIGN_NAMES[transit.signIndex]).toBe('Cancer');
    // Start and end must NOT be in 2025/2026
    expect(transit.startDate.getFullYear()).toBeLessThan(1991);
    expect(transit.endDate.getFullYear()).toBeLessThan(1992);
  });

  it('different query dates produce different transit dates for fast planets', () => {
    const today = new Date(Date.UTC(2025, 1, 13, 12, 0, 0)); // Feb 13 2025
    const natal = new Date(Date.UTC(1990, 5, 15, 14, 30, 0)); // Jun 15 1990

    const transitToday = findCurrentTransit('Sun', today);
    const transitNatal = findCurrentTransit('Sun', natal);

    // These must be different — the Sun is in different signs
    expect(transitToday.signIndex).not.toBe(transitNatal.signIndex);
    // Transit dates must differ by decades
    const startDiffYears = Math.abs(
      transitToday.startDate.getFullYear() - transitNatal.startDate.getFullYear()
    );
    expect(startDiffYears).toBeGreaterThan(30);
  });

  it('transit dates always bracket the query date', () => {
    // For any planet and date, startDate <= queryDate <= endDate
    const dates = [
      new Date(Date.UTC(1990, 5, 15)),
      new Date(Date.UTC(2000, 0, 1)),
      new Date(Date.UTC(2025, 1, 13)),
    ];
    const planets = ['Sun', 'Mars', 'Jupiter', 'Saturn'] as const;

    for (const date of dates) {
      for (const planet of planets) {
        const transit = findCurrentTransit(planet, date);
        expect(transit.startDate.getTime()).toBeLessThanOrEqual(date.getTime());
        expect(transit.endDate.getTime()).toBeGreaterThanOrEqual(date.getTime());
      }
    }
  });
});
