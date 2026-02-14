import { describe, it, expect } from 'vitest';
import { getAllPlanetPositions, getAscendant } from '../../src/ephemeris/engine';
import { computeWholeSignHouses } from '../../src/ephemeris/houses';
import { getDignity } from '../../src/data/dignities';
import { eclipticToCartesian, normalizeDegrees } from '../../src/utils/math';

describe('ephemeris engine', () => {
  it('Sun longitude at J2000.0 is ~280.46°', () => {
    const date = new Date(Date.UTC(2000, 0, 1, 12, 0, 0));
    const positions = getAllPlanetPositions(date);
    const sun = positions.get('Sun')!;
    expect(sun.longitude).toBeCloseTo(280.46, 0);
  });

  it('all 10 planets return valid positions', () => {
    const date = new Date();
    const positions = getAllPlanetPositions(date);
    expect(positions.size).toBe(10);
    for (const [, pos] of positions) {
      expect(pos.longitude).toBeGreaterThanOrEqual(0);
      expect(pos.longitude).toBeLessThan(360);
      expect(pos.signIndex).toBeGreaterThanOrEqual(0);
      expect(pos.signIndex).toBeLessThan(12);
      expect(pos.signDegree).toBeGreaterThanOrEqual(0);
      expect(pos.signDegree).toBeLessThan(30);
    }
  });

  it('Moon moves faster than outer planets', () => {
    const date = new Date();
    const positions = getAllPlanetPositions(date);
    const moon = positions.get('Moon')!;
    const saturn = positions.get('Saturn')!;
    expect(Math.abs(moon.speed)).toBeGreaterThan(Math.abs(saturn.speed));
  });

  it('sign index matches longitude / 30', () => {
    const date = new Date(Date.UTC(2024, 7, 1, 12, 0, 0)); // Aug 1, 2024
    const positions = getAllPlanetPositions(date);
    const sun = positions.get('Sun')!;
    // Sun should be in Leo (index 4, ~120-150°) in early August
    expect(sun.signIndex).toBe(4); // Leo
  });
});

describe('dignity lookup', () => {
  it('Sun in Leo = domicile', () => {
    expect(getDignity('Sun', 4)).toBe('domicile');
  });

  it('Sun in Aries = exaltation', () => {
    expect(getDignity('Sun', 0)).toBe('exaltation');
  });

  it('Sun in Aquarius = detriment', () => {
    expect(getDignity('Sun', 10)).toBe('detriment');
  });

  it('Sun in Libra = fall', () => {
    expect(getDignity('Sun', 6)).toBe('fall');
  });

  it('Mars in Cancer = fall', () => {
    expect(getDignity('Mars', 3)).toBe('fall');
  });

  it('Mars in Gemini = peregrine', () => {
    expect(getDignity('Mars', 2)).toBe('peregrine');
  });

  it('Venus in Taurus = domicile', () => {
    expect(getDignity('Venus', 1)).toBe('domicile');
  });

  it('Jupiter in Cancer = exaltation', () => {
    expect(getDignity('Jupiter', 3)).toBe('exaltation');
  });
});

describe('coordinate conversion', () => {
  it('0° longitude places on +X axis', () => {
    const [x, y, z] = eclipticToCartesian(0, 0, 10);
    expect(x).toBeCloseTo(10, 5);
    expect(y).toBeCloseTo(0, 5);
    expect(z).toBeCloseTo(0, 5);
  });

  it('90° longitude places on -Z axis', () => {
    const [x, y, z] = eclipticToCartesian(90, 0, 10);
    expect(x).toBeCloseTo(0, 5);
    expect(y).toBeCloseTo(0, 5);
    expect(z).toBeCloseTo(-10, 5);
  });

  it('180° longitude places on -X axis', () => {
    const [x, y, z] = eclipticToCartesian(180, 0, 10);
    expect(x).toBeCloseTo(-10, 5);
    expect(y).toBeCloseTo(0, 5);
    expect(z).toBeCloseTo(0, 4);
  });

  it('positive latitude raises Y', () => {
    const [, y] = eclipticToCartesian(0, 45, 10);
    expect(y).toBeGreaterThan(0);
  });

  it('normalizeDegrees wraps correctly', () => {
    expect(normalizeDegrees(370)).toBeCloseTo(10, 5);
    expect(normalizeDegrees(-10)).toBeCloseTo(350, 5);
    expect(normalizeDegrees(0)).toBeCloseTo(0, 5);
    expect(normalizeDegrees(360)).toBeCloseTo(0, 5);
  });
});

describe('houses', () => {
  it('whole sign houses produces 12 cusps', () => {
    const date = new Date(Date.UTC(2024, 0, 1, 12, 0, 0));
    const houses = computeWholeSignHouses(date, 40.7128, -74.006);
    expect(houses.cusps).toHaveLength(12);
    expect(houses.system).toBe('whole-sign');
  });

  it('cusps are 30° apart', () => {
    const date = new Date(Date.UTC(2024, 0, 1, 12, 0, 0));
    const houses = computeWholeSignHouses(date, 40.7128, -74.006);
    for (let i = 0; i < 12; i++) {
      const next = (i + 1) % 12;
      let diff = houses.cusps[next]! - houses.cusps[i]!;
      if (diff < 0) diff += 360;
      expect(diff).toBeCloseTo(30, 5);
    }
  });

  it('ascendant is within valid range', () => {
    const date = new Date(Date.UTC(2024, 0, 1, 12, 0, 0));
    const asc = getAscendant(date, 40.7128, -74.006);
    expect(asc).toBeGreaterThanOrEqual(0);
    expect(asc).toBeLessThan(360);
  });
});
