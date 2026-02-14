import { getAllPlanetPositions } from './engine.js';
import type { PlanetId, PlanetPosition } from '../types/astro.js';

export function computePositions(date: Date): Map<PlanetId, PlanetPosition> {
  return getAllPlanetPositions(date);
}
