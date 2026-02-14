import * as Astronomy from 'astronomy-engine';
import type { PlanetId, PlanetPosition } from '../types/astro.js';
import { PLANET_BODIES } from './constants.js';

function geoEclipticLon(body: Astronomy.Body, date: Date): number {
  const vec = Astronomy.GeoVector(body, date, true);
  return Astronomy.Ecliptic(vec).elon;
}

export function getPlanetPosition(planetId: PlanetId, body: Astronomy.Body, date: Date): PlanetPosition {
  // Get ecliptic coordinates via geocentric vector
  const vec = Astronomy.GeoVector(body, date, true);
  const ecl = Astronomy.Ecliptic(vec);

  // Compute speed (degrees/day) via finite difference using geocentric ecliptic
  const dt = 1 / 24; // 1 hour
  const datePlus = new Date(date.getTime() + dt * 86400000);
  const dateMinus = new Date(date.getTime() - dt * 86400000);
  const lonPlus = geoEclipticLon(body, datePlus);
  const lonMinus = geoEclipticLon(body, dateMinus);

  // Handle 360/0 wraparound for speed calculation
  let dLon = lonPlus - lonMinus;
  if (dLon > 180) dLon -= 360;
  if (dLon < -180) dLon += 360;
  const speed = dLon / (2 * dt);

  const longitude = ecl.elon;
  const signIndex = Math.floor(longitude / 30) % 12;
  const signDegree = longitude % 30;

  return {
    id: planetId,
    longitude,
    latitude: ecl.elat,
    distance: vec.Length(),
    speed,
    signIndex,
    signDegree,
  };
}

export function getAllPlanetPositions(date: Date): Map<PlanetId, PlanetPosition> {
  const positions = new Map<PlanetId, PlanetPosition>();
  for (const { id, body } of PLANET_BODIES) {
    positions.set(id, getPlanetPosition(id, body, date));
  }
  return positions;
}

export function getAscendant(date: Date, latitude: number, longitude: number): number {
  // Compute Local Sidereal Time
  const time = Astronomy.MakeTime(date);
  // GMST in sidereal hours
  const gmst = Astronomy.SiderealTime(time);
  // Convert to degrees and add observer longitude to get LST
  const lst = (gmst * 15 + longitude) % 360;

  // Ascendant formula: the ecliptic longitude rising at the eastern horizon
  const oblRad = 23.4393 * Math.PI / 180;
  const latRad = latitude * Math.PI / 180;
  const lstRad = lst * Math.PI / 180;

  // tan(Asc) = cos(LST) / (-(sin(obliquity) * tan(latitude) + cos(obliquity) * sin(LST)))
  const num = Math.cos(lstRad);
  const den = -(Math.sin(oblRad) * Math.tan(latRad) + Math.cos(oblRad) * Math.sin(lstRad));
  let asc = Math.atan2(num, den) * 180 / Math.PI;

  // Normalize to 0-360
  asc = ((asc % 360) + 360) % 360;
  return asc;
}

export function getMidheaven(date: Date, longitude: number): number {
  const time = Astronomy.MakeTime(date);
  const gmst = Astronomy.SiderealTime(time);
  const lst = (gmst * 15 + longitude) % 360;

  const oblRad = 23.4393 * Math.PI / 180;
  const lstRad = lst * Math.PI / 180;

  // MC = atan(tan(LST) / cos(obliquity))
  let mc = Math.atan2(Math.sin(lstRad), Math.cos(lstRad) * Math.cos(oblRad)) * 180 / Math.PI;
  mc = ((mc % 360) + 360) % 360;
  return mc;
}
