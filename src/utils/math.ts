const DEG2RAD = Math.PI / 180;

export function eclipticToCartesian(lonDeg: number, latDeg: number, radius: number): [number, number, number] {
  const lon = lonDeg * DEG2RAD;
  const lat = latDeg * DEG2RAD;
  const x = radius * Math.cos(lat) * Math.cos(lon);
  const y = radius * Math.sin(lat);
  const z = -radius * Math.cos(lat) * Math.sin(lon);
  return [x, y, z];
}

export function normalizeDegrees(deg: number): number {
  return ((deg % 360) + 360) % 360;
}

export function degreesToRadians(deg: number): number {
  return deg * DEG2RAD;
}

export function radiansToDegrees(rad: number): number {
  return rad * (180 / Math.PI);
}

export function formatDegrees(deg: number): string {
  return `${deg.toFixed(1)}°`;
}
