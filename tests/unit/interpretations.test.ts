import { describe, it, expect } from 'vitest';
import {
  getInterpretation,
  getRisingInterpretation,
  TRANSIT_INTERPRETATIONS,
  NATAL_INTERPRETATIONS,
  PLANETARY_PERIODS,
} from '../../src/data/interpretations.js';

const PLANETS = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
const SIGNS = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];

describe('interpretation data completeness', () => {
  it('every planet-sign transit entry exists and is rich (>100 chars)', () => {
    for (const planet of PLANETS) {
      for (const sign of SIGNS) {
        const key = `${planet}-${sign}`;
        const interp = TRANSIT_INTERPRETATIONS[key];
        expect(interp, `Missing transit for ${key}`).toBeDefined();
        expect(interp.brief.length, `Brief too short for ${key}`).toBeGreaterThan(100);
      }
    }
  });

  it('every planet-sign natal entry exists and is rich (>100 chars)', () => {
    for (const planet of PLANETS) {
      for (const sign of SIGNS) {
        const key = `${planet}-${sign}`;
        const interp = NATAL_INTERPRETATIONS[key];
        expect(interp, `Missing natal for ${key}`).toBeDefined();
        expect(interp.brief.length, `Brief too short for natal ${key}`).toBeGreaterThan(100);
      }
    }
  });

  it('every Rising sign has a natal interpretation entry', () => {
    for (const sign of SIGNS) {
      const key = `Rising-${sign}`;
      expect(NATAL_INTERPRETATIONS[key], `Missing Rising for ${key}`).toBeDefined();
    }
  });

  it('every planet has a period entry', () => {
    for (const planet of PLANETS) {
      expect(PLANETARY_PERIODS[planet], `Missing period for ${planet}`).toBeDefined();
    }
  });
});

describe('getInterpretation lookup', () => {
  it('returns non-null for every planet-sign transit combination', () => {
    for (const planet of PLANETS) {
      for (const sign of SIGNS) {
        const interp = getInterpretation(planet, sign, false);
        expect(interp, `getInterpretation('${planet}', '${sign}', false) returned null`).not.toBeNull();
      }
    }
  });

  it('returns non-null for every planet-sign natal combination', () => {
    for (const planet of PLANETS) {
      for (const sign of SIGNS) {
        const interp = getInterpretation(planet, sign, true);
        expect(interp, `getInterpretation('${planet}', '${sign}', true) returned null`).not.toBeNull();
      }
    }
  });

  it('modern style returns different text than traditional', () => {
    const trad = getInterpretation('Sun', 'Aries', false, 'traditional');
    const mod = getInterpretation('Sun', 'Aries', false, 'modern');
    expect(trad).not.toBeNull();
    expect(mod).not.toBeNull();
    expect(trad!.brief).not.toBe(mod!.brief);
  });
});

describe('getRisingInterpretation lookup', () => {
  it('returns non-null for every sign', () => {
    for (const sign of SIGNS) {
      const interp = getRisingInterpretation(sign);
      expect(interp, `getRisingInterpretation('${sign}') returned null`).not.toBeNull();
    }
  });

  it('modern style returns different text than traditional', () => {
    const trad = getRisingInterpretation('Aries', 'traditional');
    const mod = getRisingInterpretation('Aries', 'modern');
    expect(trad).not.toBeNull();
    expect(mod).not.toBeNull();
    expect(trad!.brief).not.toBe(mod!.brief);
  });
});
