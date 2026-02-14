import * as THREE from 'three';

interface StarData {
  ra: number;   // right ascension in hours
  dec: number;  // declination in degrees
  mag: number;  // apparent magnitude
  r: number;    // color red component
  g: number;    // color green component
  b: number;    // color blue component
  sz: number;   // display size
}

/** Create a starfield from the HYG catalog data (loaded async) */
export async function createStarfield(): Promise<THREE.Points> {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const resp = await fetch(`${baseUrl}data/stars-hyg.json`);
  const stars: StarData[] = await resp.json();

  const count = stars.length;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  const FAR_RADIUS = 200;

  for (let i = 0; i < count; i++) {
    const star = stars[i]!;
    // Convert RA/Dec to cartesian on a far sphere
    const raRad = star.ra * (Math.PI / 12); // hours to radians
    const decRad = star.dec * (Math.PI / 180);

    positions[i * 3]     = FAR_RADIUS * Math.cos(decRad) * Math.cos(raRad);
    positions[i * 3 + 1] = FAR_RADIUS * Math.sin(decRad);
    positions[i * 3 + 2] = -FAR_RADIUS * Math.cos(decRad) * Math.sin(raRad);

    colors[i * 3]     = star.r;
    colors[i * 3 + 1] = star.g;
    colors[i * 3 + 2] = star.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.5,
    vertexColors: true,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.8,
  });

  const points = new THREE.Points(geometry, material);
  points.name = 'starfield';
  return points;
}
