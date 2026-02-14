import type { PlanetId } from '../types/astro.js';

export interface PlanetMeta {
  id: PlanetId;
  name: string;
  glyph: string;
  color: number;
  size: number;      // relative display size
  orbitRadius: number; // display radius on celestial sphere
}

export const PLANETS: PlanetMeta[] = [
  { id: 'Sun',     name: 'Sun',     glyph: '☉', color: 0xffdd00, size: 0.8, orbitRadius: 10 },
  { id: 'Moon',    name: 'Moon',    glyph: '☽', color: 0xcccccc, size: 0.5, orbitRadius: 5 },
  { id: 'Mercury', name: 'Mercury', glyph: '☿', color: 0xbbbbbb, size: 0.25, orbitRadius: 9 },
  { id: 'Venus',   name: 'Venus',   glyph: '♀', color: 0xffaacc, size: 0.35, orbitRadius: 11 },
  { id: 'Mars',    name: 'Mars',    glyph: '♂', color: 0xff4422, size: 0.3, orbitRadius: 13 },
  { id: 'Jupiter', name: 'Jupiter', glyph: '♃', color: 0xddaa66, size: 0.6, orbitRadius: 15 },
  { id: 'Saturn',  name: 'Saturn',  glyph: '♄', color: 0xccbb88, size: 0.5, orbitRadius: 17 },
  { id: 'Uranus',  name: 'Uranus',  glyph: '♅', color: 0x88ddff, size: 0.4, orbitRadius: 19 },
  { id: 'Neptune', name: 'Neptune', glyph: '♆', color: 0x4466ff, size: 0.4, orbitRadius: 21 },
  { id: 'Pluto',   name: 'Pluto',   glyph: '♇', color: 0xaa88aa, size: 0.2, orbitRadius: 23 },
];

export const PLANET_MAP = new Map(PLANETS.map(p => [p.id, p]));
