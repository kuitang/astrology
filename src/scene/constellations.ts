import * as THREE from 'three';
import { degreesToRadians } from '../utils/math.js';

interface ConstellationData {
  name: string;
  abbr: string;
  stars: [number, number][];
  lines: [number, number][];
  extent: [number, number];
}

// Real zodiac constellation positions (tropical longitude, ~24° precession offset)
const ZODIAC_CONSTELLATIONS: ConstellationData[] = [
  {
    name: 'Aries', abbr: 'Ari',
    extent: [24, 53],
    stars: [[29, 10], [33, 9], [38, 7], [46, 5]],
    lines: [[0, 1], [1, 2], [2, 3]],
  },
  {
    name: 'Taurus', abbr: 'Tau',
    extent: [36, 90],
    stars: [[49, -6], [55, -5], [60, -4], [63, 0], [68, 2], [52, -9], [57, -7]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6]],
  },
  {
    name: 'Gemini', abbr: 'Gem',
    extent: [80, 118],
    stars: [[93, 6], [99, 10], [103, 7], [96, 2], [90, -1], [100, 0], [107, 3]],
    lines: [[0, 1], [1, 2], [0, 3], [3, 4], [3, 5], [5, 6]],
  },
  {
    name: 'Cancer', abbr: 'Cnc',
    extent: [108, 128],
    stars: [[110, 1], [116, 2], [120, 0], [114, -2]],
    lines: [[0, 1], [1, 2], [1, 3]],
  },
  {
    name: 'Leo', abbr: 'Leo',
    extent: [128, 172],
    stars: [[130, 0], [138, 10], [143, 12], [148, 14], [155, 10], [160, 6], [145, 0], [150, -2]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [6, 0]],
  },
  {
    name: 'Virgo', abbr: 'Vir',
    extent: [174, 218],
    stars: [[176, 2], [183, -2], [190, 0], [196, -2], [200, -7], [204, -11], [195, 5], [188, 8]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [2, 6], [6, 7]],
  },
  {
    name: 'Libra', abbr: 'Lib',
    extent: [218, 240],
    stars: [[220, 0], [225, 4], [230, 2], [224, -3]],
    lines: [[0, 1], [1, 2], [0, 3], [3, 2]],
  },
  {
    name: 'Scorpius', abbr: 'Sco',
    extent: [238, 248],
    stars: [[240, -4], [243, -6], [245, -10], [247, -15], [248, -18], [244, -20], [240, -22]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6]],
  },
  {
    name: 'Ophiuchus', abbr: 'Oph',
    extent: [248, 266],
    stars: [[250, 12], [255, 8], [258, 4], [260, 0], [253, 2], [256, -4]],
    lines: [[0, 1], [1, 2], [2, 3], [1, 4], [4, 5]],
  },
  {
    name: 'Sagittarius', abbr: 'Sgr',
    extent: [266, 296],
    stars: [[268, -6], [274, -3], [278, 0], [282, -4], [286, -2], [290, 1], [280, -8]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [3, 6]],
  },
  {
    name: 'Capricornus', abbr: 'Cap',
    extent: [300, 327],
    stars: [[302, -3], [308, -5], [314, -8], [320, -6], [324, -2], [310, 0]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]],
  },
  {
    name: 'Aquarius', abbr: 'Aqr',
    extent: [328, 352],
    stars: [[330, -5], [336, -2], [340, 0], [345, -3], [350, -6], [338, -8]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [2, 5]],
  },
  {
    name: 'Pisces', abbr: 'Psc',
    extent: [352, 28],
    stars: [[354, -5], [0, -2], [6, 2], [12, 6], [18, 3], [10, -4], [4, -8]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [5, 6]],
  },
];

const CONSTELLATION_RADIUS = 26;

/** Create a circle texture for constellation stars */
function createCircleTexture(): THREE.Texture {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  // Outer glow
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, 'rgba(170, 220, 255, 1.0)');
  gradient.addColorStop(0.3, 'rgba(170, 220, 255, 0.8)');
  gradient.addColorStop(0.6, 'rgba(100, 160, 220, 0.3)');
  gradient.addColorStop(1, 'rgba(100, 160, 220, 0)');

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.fill();

  // Bright center
  ctx.fillStyle = 'rgba(220, 240, 255, 1)';
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size * 0.15, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

function starPos(lon: number, lat: number, r: number): THREE.Vector3 {
  const lonRad = degreesToRadians(lon);
  const latRad = degreesToRadians(lat);
  return new THREE.Vector3(
    r * Math.cos(latRad) * Math.cos(lonRad),
    r * Math.sin(latRad),
    -r * Math.cos(latRad) * Math.sin(lonRad)
  );
}

export function createConstellations(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'constellationGroup';

  const circleTexture = createCircleTexture();

  for (const con of ZODIAC_CONSTELLATIONS) {
    // Stick figure lines — subtle blue
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x3366aa,
      transparent: true,
      opacity: 0.35,
    });

    for (const [i, j] of con.lines) {
      const starA = con.stars[i]!;
      const starB = con.stars[j]!;
      const pA = starPos(starA[0], starA[1], CONSTELLATION_RADIUS);
      const pB = starPos(starB[0], starB[1], CONSTELLATION_RADIUS);
      const geom = new THREE.BufferGeometry().setFromPoints([pA, pB]);
      const line = new THREE.Line(geom, lineMaterial);
      group.add(line);
    }

    // Constellation stars as circle sprites (each star is an individual sprite)
    for (const [lon, lat] of con.stars) {
      const pos = starPos(lon, lat, CONSTELLATION_RADIUS);
      const spriteMat = new THREE.SpriteMaterial({
        map: circleTexture,
        transparent: true,
        opacity: 0.9,
        color: 0xaaddff,
        sizeAttenuation: true,
      });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.position.copy(pos);
      sprite.scale.set(0.8, 0.8, 1);
      group.add(sprite);
    }

    // Constellation name label
    const midLon = con.stars.reduce((s, st) => s + st[0], 0) / con.stars.length;
    const midLat = con.stars.reduce((s, st) => s + st[1], 0) / con.stars.length;
    const labelPos = starPos(midLon, midLat, CONSTELLATION_RADIUS + 2.5);

    const canvas = document.createElement('canvas');
    canvas.width = 192;
    canvas.height = 40;
    const ctx = canvas.getContext('2d')!;
    ctx.font = '22px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(80, 140, 180, 0.6)';
    ctx.fillText(con.name, 96, 20);
    const texture = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.position.copy(labelPos);
    sprite.position.y += 1.5;
    sprite.scale.set(5, 1.2, 1);
    sprite.name = `constellation-label-${con.abbr}`;
    sprite.userData = { type: 'constellation', name: con.name };
    group.add(sprite);
  }

  return group;
}
