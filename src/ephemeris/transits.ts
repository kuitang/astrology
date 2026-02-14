import * as Astronomy from 'astronomy-engine';
import type { PlanetId, TransitEvent } from '../types/astro.js';
import { PLANET_BODIES, SIGN_BOUNDARIES } from './constants.js';

function getLongitude(body: Astronomy.Body, date: Date): number {
  const vec = Astronomy.GeoVector(body, date, true);
  return Astronomy.Ecliptic(vec).elon;
}

function crossesBoundary(lon1: number, lon2: number, boundary: number): boolean {
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

function bisectCrossing(body: Astronomy.Body, t1: Date, t2: Date, boundary: number): Date {
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

export function findCurrentTransit(planetId: PlanetId, date: Date): TransitEvent {
  const entry = PLANET_BODIES.find(p => p.id === planetId)!;
  const body = entry.body;
  const lon = getLongitude(body, date);
  const signIndex = Math.floor(lon / 30) % 12;
  const boundary = SIGN_BOUNDARIES[signIndex]!;
  const nextBoundary = SIGN_BOUNDARIES[(signIndex + 1) % 12]!;

  // Search backward for ingress (when planet entered this sign)
  const dayMs = 86400000;
  let startDate = date;
  {
    let t = date.getTime();
    let prevLon = lon;
    for (let step = 0; step < 730; step++) {
      t -= dayMs;
      const curLon = getLongitude(body, new Date(t));
      if (crossesBoundary(curLon, prevLon, boundary)) {
        startDate = bisectCrossing(body, new Date(t), new Date(t + dayMs), boundary);
        break;
      }
      prevLon = curLon;
    }
  }

  // Search forward for egress (when planet leaves this sign)
  let endDate = date;
  {
    let t = date.getTime();
    let prevLon = lon;
    for (let step = 0; step < 730; step++) {
      t += dayMs;
      const curLon = getLongitude(body, new Date(t));
      if (crossesBoundary(prevLon, curLon, nextBoundary)) {
        endDate = bisectCrossing(body, new Date(t - dayMs), new Date(t), nextBoundary);
        break;
      }
      prevLon = curLon;
    }
  }

  return { planetId, signIndex, startDate, endDate };
}
