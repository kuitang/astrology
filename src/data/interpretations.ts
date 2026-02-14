import type { InterpretationStyle } from '../types/astro.js';

export interface Interpretation {
  brief: string;
  keywords: string[];
}

export interface PlanetaryPeriod {
  siderealPeriod: string;
  signDuration: string;
}

export const PLANETARY_PERIODS: Record<string, PlanetaryPeriod> = {
  Sun:     { siderealPeriod: '1 year',       signDuration: '~30 days' },
  Moon:    { siderealPeriod: '27.3 days',    signDuration: '~2.5 days' },
  Mercury: { siderealPeriod: '88 days',      signDuration: '~14–30 days' },
  Venus:   { siderealPeriod: '225 days',     signDuration: '~23–60 days' },
  Mars:    { siderealPeriod: '1.88 years',   signDuration: '~6 weeks' },
  Jupiter: { siderealPeriod: '11.86 years',  signDuration: '~1 year' },
  Saturn:  { siderealPeriod: '29.46 years',  signDuration: '~2.5 years' },
  Uranus:  { siderealPeriod: '84 years',     signDuration: '~7 years' },
  Neptune: { siderealPeriod: '164.8 years',  signDuration: '~14 years' },
  Pluto:   { siderealPeriod: '248 years',    signDuration: '~12–31 years' },
};

import {
  TRANSIT_INTERPRETATIONS as TRANSIT_TRAD,
  NATAL_INTERPRETATIONS as NATAL_TRAD,
} from './interpretations-trad.js';

import {
  TRANSIT_INTERPRETATIONS as TRANSIT_MOD,
  NATAL_INTERPRETATIONS as NATAL_MOD,
} from './interpretations-mod.js';

// Re-export traditional as defaults for backward compatibility
export const TRANSIT_INTERPRETATIONS = TRANSIT_TRAD;
export const NATAL_INTERPRETATIONS = NATAL_TRAD;

const STYLE_MAP = {
  traditional: { transit: TRANSIT_TRAD, natal: NATAL_TRAD },
  modern:      { transit: TRANSIT_MOD,  natal: NATAL_MOD },
};

/** Look up interpretation for a planet-sign combination */
export function getInterpretation(
  planet: string, sign: string, natal = false, style: InterpretationStyle = 'traditional',
): Interpretation | null {
  const records = STYLE_MAP[style];
  const record = natal ? records.natal : records.transit;
  const key = `${planet}-${sign}`;
  return record[key] ?? null;
}

/** Look up interpretation for the Rising (Ascendant) sign */
export function getRisingInterpretation(
  sign: string, style: InterpretationStyle = 'traditional',
): Interpretation | null {
  const key = `Rising-${sign}`;
  return STYLE_MAP[style].natal[key] ?? null;
}
