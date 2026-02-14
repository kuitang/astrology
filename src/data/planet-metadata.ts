import type { PlanetId } from '../types/astro.js';

export interface PlanetMeta {
  id: PlanetId;
  name: string;
  glyph: string;
  color: number;
  size: number;      // relative display size
  orbitRadius: number; // display radius on celestial sphere
}

// Planets at equal radial spacing (step 2), ordered by Chaldean geocentric distance:
// Moon → Mercury → Venus → Sun → Mars → Jupiter → Saturn → Uranus → Neptune → Pluto
export const PLANETS: PlanetMeta[] = [
  { id: 'Moon',    name: 'Moon',    glyph: '☽', color: 0xcccccc, size: 0.8, orbitRadius: 6 },
  { id: 'Mercury', name: 'Mercury', glyph: '☿', color: 0xbbbbbb, size: 0.5, orbitRadius: 8 },
  { id: 'Venus',   name: 'Venus',   glyph: '♀', color: 0xffaacc, size: 0.6, orbitRadius: 10 },
  { id: 'Sun',     name: 'Sun',     glyph: '☉', color: 0xffdd00, size: 1.2, orbitRadius: 12 },
  { id: 'Mars',    name: 'Mars',    glyph: '♂', color: 0xff4422, size: 0.55, orbitRadius: 14 },
  { id: 'Jupiter', name: 'Jupiter', glyph: '♃', color: 0xddaa66, size: 1.0, orbitRadius: 16 },
  { id: 'Saturn',  name: 'Saturn',  glyph: '♄', color: 0xccbb88, size: 0.9, orbitRadius: 18 },
  { id: 'Uranus',  name: 'Uranus',  glyph: '♅', color: 0x88ddff, size: 0.7, orbitRadius: 20 },
  { id: 'Neptune', name: 'Neptune', glyph: '♆', color: 0x4466ff, size: 0.7, orbitRadius: 22 },
  { id: 'Pluto',   name: 'Pluto',   glyph: '♇', color: 0xaa88aa, size: 0.4, orbitRadius: 24 },
];

export const PLANET_MAP = new Map(PLANETS.map(p => [p.id, p]));
