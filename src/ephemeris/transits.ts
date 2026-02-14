import * as Astronomy from 'astronomy-engine';
import type { PlanetId, TransitEvent } from '../types/astro.js';
import { PLANET_BODIES, SIGN_BOUNDARIES } from './constants.js';

export function getLongitude(body: Astronomy.Body, date: Date): number {
  const vec = Astronomy.GeoVector(body, date, true);
  return Astronomy.Ecliptic(vec).elon;
}

export function crossesBoundary(lon1: number, lon2: number, boundary: number): boolean {
  // Normalize both longitudes relative to boundary
  let d1 = lon1 - boundary;
  let d2 = lon2 - boundary;
  // Wrap to [-180, 180]
  if (d1 > 180) d1 -= 360;
  if (d1 < -180) d1 += 360;
  if (d2 > 180) d2 -= 360;
  if (d2 < -180) d2 += 360;
  // Guard: both must be within ±90° of boundary to be a real crossing
  if (Math.abs(d1) > 90 || Math.abs(d2) > 90) return false;
  return d1 * d2 < 0;
}

export function bisectCrossing(body: Astronomy.Body, t1: Date, t2: Date, boundary: number): Date {
  let lo = t1.getTime();
  let hi = t2.getTime();
  for (let i = 0; i < 50; i++) {
    const mid = (lo + hi) / 2;
    const lonLo = getLongitude(body, new Date(lo));
    const lonMid = getLongitude(body, new Date(mid));
    if (crossesBoundary(lonLo, lonMid, boundary)) {
      hi = mid;
    } else {
      lo = mid;
    }
  }
  return new Date((lo + hi) / 2);
}

/**
 * Adaptive step size (in days) based on planet's typical speed.
 * Slow planets get larger steps to cover their long sign transits efficiently.
 * The step must be small enough not to skip over a boundary crossing
 * (planet must not traverse a full sign in one step), but large enough
 * to cover decades for Pluto.
 */
function getSearchStepDays(planetId: PlanetId): number {
  switch (planetId) {
    case 'Pluto':   return 90;  // ~0.01-0.03 deg/day, moves ~2.7 deg in 90 days
    case 'Neptune': return 60;  // ~0.02 deg/day, moves ~1.2 deg in 60 days
    case 'Uranus':  return 30;  // ~0.04 deg/day, moves ~1.2 deg in 30 days
    case 'Saturn':  return 14;  // ~0.03-0.06 deg/day
    case 'Jupiter': return 7;   // ~0.08-0.14 deg/day
    case 'Mars':    return 2;   // ~0.5 deg/day
    default:        return 1;   // Sun, Moon, Mercury, Venus: fast movers
  }
}

/**
 * Maximum search window (in years) based on the longest time
 * a planet can spend in a single sign.
 */
function getMaxSearchYears(planetId: PlanetId): number {
  switch (planetId) {
    case 'Pluto':   return 35;  // Pluto can spend up to ~31 years in a sign
    case 'Neptune': return 18;  // ~14 years per sign
    case 'Uranus':  return 10;  // ~7 years per sign
    case 'Saturn':  return 4;   // ~2.5 years per sign
    case 'Jupiter': return 2;   // ~1 year per sign
    default:        return 2;   // inner planets: well under 2 years
  }
}

/**
 * When using large steps, we may have a wide interval containing a crossing.
 * Do a day-level sub-search within [t1, t2] to narrow down, then bisect
 * for sub-day precision.
 */
function refineCrossing(body: Astronomy.Body, t1: Date, t2: Date, boundary: number): Date {
  const dayMs = 86400000;
  const lo = t1.getTime();
  const hi = t2.getTime();
  let prevLon = getLongitude(body, new Date(lo));

  // Walk day-by-day within the coarse interval
  for (let t = lo + dayMs; t <= hi; t += dayMs) {
    const curLon = getLongitude(body, new Date(t));
    if (crossesBoundary(prevLon, curLon, boundary)) {
      return bisectCrossing(body, new Date(t - dayMs), new Date(t), boundary);
    }
    prevLon = curLon;
  }

  // Fallback: bisect the whole interval
  return bisectCrossing(body, t1, t2, boundary);
}

export function findCurrentTransit(planetId: PlanetId, date: Date): TransitEvent {
  const entry = PLANET_BODIES.find(p => p.id === planetId)!;
  const body = entry.body;
  const lon = getLongitude(body, date);
  const signIndex = Math.floor(lon / 30) % 12;
  const boundary = SIGN_BOUNDARIES[signIndex]!;
  const nextBoundary = SIGN_BOUNDARIES[(signIndex + 1) % 12]!;

  const dayMs = 86400000;
  const stepDays = getSearchStepDays(planetId);
  const stepMs = stepDays * dayMs;
  const maxYears = getMaxSearchYears(planetId);
  const maxSteps = Math.ceil((maxYears * 365.25) / stepDays);

  // Search backward for ingress (when planet most recently entered this sign).
  // The nearest crossing going backward is the permanent ingress because the
  // planet is still in this sign at the query date.
  let startDate = date;
  {
    let t = date.getTime();
    let prevLon = lon;
    for (let step = 0; step < maxSteps; step++) {
      const nextT = t - stepMs;
      const curLon = getLongitude(body, new Date(nextT));
      if (crossesBoundary(curLon, prevLon, boundary)) {
        if (stepDays > 1) {
          startDate = refineCrossing(body, new Date(nextT), new Date(t), boundary);
        } else {
          startDate = bisectCrossing(body, new Date(nextT), new Date(t), boundary);
        }
        break;
      }
      t = nextT;
      prevLon = curLon;
    }
  }

  // Search forward for egress (when planet next leaves this sign).
  // The nearest crossing going forward is the first time the planet
  // crosses the next sign boundary.
  let endDate = date;
  {
    let t = date.getTime();
    let prevLon = lon;
    for (let step = 0; step < maxSteps; step++) {
      const nextT = t + stepMs;
      const curLon = getLongitude(body, new Date(nextT));
      if (crossesBoundary(prevLon, curLon, nextBoundary)) {
        if (stepDays > 1) {
          endDate = refineCrossing(body, new Date(t), new Date(nextT), nextBoundary);
        } else {
          endDate = bisectCrossing(body, new Date(t), new Date(nextT), nextBoundary);
        }
        break;
      }
      t = nextT;
      prevLon = curLon;
    }
  }

  return { planetId, signIndex, startDate, endDate };
}
