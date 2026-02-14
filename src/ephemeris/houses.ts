import type { HouseCusps } from '../types/astro.js';
import { getAscendant, getMidheaven } from './engine.js';

export function computeWholeSignHouses(date: Date, latitude: number, longitude: number): HouseCusps {
  const ascendant = getAscendant(date, latitude, longitude);
  const mc = getMidheaven(date, longitude);

  // Whole Sign: 1st house starts at 0° of the Ascendant's sign
  const ascSignIndex = Math.floor(ascendant / 30);
  const cusps: number[] = [];
  for (let i = 0; i < 12; i++) {
    cusps.push(((ascSignIndex + i) * 30) % 360);
  }

  return {
    system: 'whole-sign',
    cusps,
    ascendant,
    mc,
  };
}
