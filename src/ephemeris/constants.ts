import { Body } from 'astronomy-engine';
import type { PlanetId } from '../types/astro.js';

export const PLANET_BODIES: { id: PlanetId; body: Body }[] = [
  { id: 'Sun',     body: Body.Sun },
  { id: 'Moon',    body: Body.Moon },
  { id: 'Mercury', body: Body.Mercury },
  { id: 'Venus',   body: Body.Venus },
  { id: 'Mars',    body: Body.Mars },
  { id: 'Jupiter', body: Body.Jupiter },
  { id: 'Saturn',  body: Body.Saturn },
  { id: 'Uranus',  body: Body.Uranus },
  { id: 'Neptune', body: Body.Neptune },
  { id: 'Pluto',   body: Body.Pluto },
];

export const SIGN_BOUNDARIES = Array.from({ length: 12 }, (_, i) => i * 30);

export const OBLIQUITY = 23.4393; // Earth's axial tilt in degrees
