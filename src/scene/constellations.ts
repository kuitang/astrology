import * as THREE from 'three';
import { eclipticToCartesian } from '../utils/math.js';

export interface ConstellationData {
  name: string;
  abbr: string;
  stars: [number, number][];
  lines: [number, number][];
  /** Real ecliptic extent [start°, end°] in tropical coordinates */
  extent: [number, number];
  /** The tropical sign this constellation is conventionally associated with */
  conventionalSign: string;
  /** Approximate mean distance of brightest stars in light-years (for depth ordering) */
  distanceLy: number;
  /** The conventional sign's fixed 30° range [start°, end°] */
  conventionalRange: [number, number];
}

// Import real constellation data from Stellarium + HYG catalog
// See scripts/generate-constellations.py for the generation pipeline
import { ZODIAC_CONSTELLATIONS_GENERATED } from './constellation-data.generated.js';

export const ZODIAC_CONSTELLATIONS: ConstellationData[] = ZODIAC_CONSTELLATIONS_GENERATED;

/** Map distanceLy to a display radius using log scale.
 *  Closest constellations (~50 ly) → radius 42
 *  Farthest constellations (~550 ly) → radius 55
 *  This puts constellations in the outermost annulus, well beyond the sign belt (28). */
function constellationRadius(distanceLy: number): number {
  const minR = 42;
  const maxR = 55;
  const minD = Math.log(40);   // ~40 ly floor
  const maxD = Math.log(600);  // ~600 ly ceiling
  const t = (Math.log(Math.max(40, distanceLy)) - minD) / (maxD - minD);
  return minR + Math.min(1, Math.max(0, t)) * (maxR - minR);
}

/** Create a circle texture for constellation stars */
function createCircleTexture(): THREE.Texture {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
  gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
  gradient.addColorStop(0.6, 'rgba(200, 200, 200, 0.3)');
  gradient.addColorStop(1, 'rgba(200, 200, 200, 0)');

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size * 0.15, 0, Math.PI * 2);
  ctx.fill();

  return new THREE.CanvasTexture(canvas);
}

/** Convert ecliptic longitude/latitude to a 3D position on the constellation sphere.
 *  Delegates to the shared eclipticToCartesian utility so the projection math
 *  (lon/lat on a sphere) is defined in exactly one place. */
function starPos(lon: number, lat: number, r: number): THREE.Vector3 {
  const [x, y, z] = eclipticToCartesian(lon, lat, r);
  return new THREE.Vector3(x, y, z);
}

export function createConstellations(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'constellationGroup';

  const circleTexture = createCircleTexture();

  // Shared materials for all constellations (avoid duplicate draw calls)
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.2,
  });
  const starSpriteMat = new THREE.SpriteMaterial({
    map: circleTexture,
    transparent: true,
    opacity: 0.85,
    color: 0xffffff,
    sizeAttenuation: true,
  });
  const hitGeom = new THREE.SphereGeometry(7, 8, 8);
  const starHitGeom = new THREE.SphereGeometry(2.5, 6, 6);
  const hitMat = new THREE.MeshBasicMaterial({
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
  });

  for (const con of ZODIAC_CONSTELLATIONS) {
    const r = constellationRadius(con.distanceLy);

    // Pre-compute all star positions once so lines and sprites share
    // the exact same Vector3 coordinates (avoids Float64→Float32 drift
    // when BufferGeometry.setFromPoints converts to a Float32Array).
    const positions: THREE.Vector3[] = con.stars.map(
      ([lon, lat]) => starPos(lon, lat, r),
    );

    // Stick figure lines — use the pre-computed positions
    for (const [i, j] of con.lines) {
      const pA = positions[i]!;
      const pB = positions[j]!;
      const geom = new THREE.BufferGeometry().setFromPoints([pA, pB]);
      const line = new THREE.Line(geom, lineMaterial);
      group.add(line);
    }

    // Constellation stars as circle sprites — same pre-computed positions
    for (const pos of positions) {
      const sprite = new THREE.Sprite(starSpriteMat);
      sprite.position.copy(pos);
      sprite.scale.set(1.2, 1.2, 1);
      sprite.userData = { type: 'constellation', name: con.name };
      group.add(sprite);

      // Per-star invisible hit sphere for better touch targets
      const starHit = new THREE.Mesh(starHitGeom, hitMat);
      starHit.position.copy(pos);
      starHit.userData = { type: 'constellation', name: con.name };
      group.add(starHit);
    }

    // Invisible click target (shared geometry and material)
    const midLon = con.stars.reduce((s: number, st: [number, number]) => s + st[0], 0) / con.stars.length;
    const midLat = con.stars.reduce((s: number, st: [number, number]) => s + st[1], 0) / con.stars.length;
    const hitPos = starPos(midLon, midLat, r);

    const hitMesh = new THREE.Mesh(hitGeom, hitMat);
    hitMesh.position.copy(hitPos);
    hitMesh.name = `constellation-hit-${con.abbr}`;
    hitMesh.userData = { type: 'constellation', name: con.name };
    group.add(hitMesh);
  }

  return group;
}
