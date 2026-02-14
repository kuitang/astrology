import type { PlanetId, DignityType } from '../types/astro.js';

// Sign index: 0=Aries..11=Pisces
type SignIndex = number;

const DOMICILE: Record<string, SignIndex[]> = {
  Sun:     [4],       // Leo
  Moon:    [3],       // Cancer
  Mercury: [2, 5],    // Gemini, Virgo
  Venus:   [1, 6],    // Taurus, Libra
  Mars:    [0, 7],    // Aries, Scorpio
  Jupiter: [8, 11],   // Sagittarius, Pisces
  Saturn:  [9, 10],   // Capricorn, Aquarius
  Uranus:  [10],      // Aquarius
  Neptune: [11],      // Pisces
  Pluto:   [7],       // Scorpio
};

const EXALTATION: Record<string, SignIndex | null> = {
  Sun:     0,    // Aries
  Moon:    1,    // Taurus
  Mercury: 5,    // Virgo
  Venus:   11,   // Pisces
  Mars:    9,    // Capricorn
  Jupiter: 3,    // Cancer
  Saturn:  6,    // Libra
  Uranus:  7,    // Scorpio
  Neptune: 3,    // Cancer (modern)
  Pluto:   4,    // Leo (modern)
};

const DETRIMENT: Record<string, SignIndex[]> = {
  Sun:     [10],      // Aquarius
  Moon:    [9],       // Capricorn
  Mercury: [8, 11],   // Sagittarius, Pisces
  Venus:   [0, 7],    // Aries, Scorpio
  Mars:    [1, 6],    // Taurus, Libra
  Jupiter: [2, 5],    // Gemini, Virgo
  Saturn:  [3, 4],    // Cancer, Leo
  Uranus:  [4],       // Leo
  Neptune: [5],       // Virgo
  Pluto:   [1],       // Taurus
};

const FALL: Record<string, SignIndex | null> = {
  Sun:     6,    // Libra
  Moon:    7,    // Scorpio
  Mercury: 11,   // Pisces
  Venus:   5,    // Virgo
  Mars:    3,    // Cancer
  Jupiter: 9,    // Capricorn
  Saturn:  0,    // Aries
  Uranus:  1,    // Taurus
  Neptune: 9,    // Capricorn
  Pluto:   10,   // Aquarius
};

export function getDignity(planetId: PlanetId, signIndex: number): DignityType {
  const dom = DOMICILE[planetId];
  if (dom && dom.includes(signIndex)) return 'domicile';

  const exa = EXALTATION[planetId];
  if (exa === signIndex) return 'exaltation';

  const det = DETRIMENT[planetId];
  if (det && det.includes(signIndex)) return 'detriment';

  const fal = FALL[planetId];
  if (fal === signIndex) return 'fall';

  return 'peregrine';
}

export const DIGNITY_LABELS: Record<DignityType, string> = {
  domicile: 'Domicile (Home)',
  exaltation: 'Exaltation',
  detriment: 'Detriment',
  fall: 'Fall',
  peregrine: 'Peregrine',
};

export const DIGNITY_COLORS: Record<DignityType, string> = {
  domicile: '#44ff44',
  exaltation: '#ffdd44',
  detriment: '#ff6644',
  fall: '#ff2222',
  peregrine: '#888888',
};
