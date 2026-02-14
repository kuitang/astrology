import * as THREE from 'three';
import { ZODIAC_SIGNS, ELEMENT_COLORS } from '../data/zodiac-signs.js';
import { degreesToRadians } from '../utils/math.js';

const BELT_RADIUS = 25;

/** Create a high-quality vector glyph canvas */
function createGlyphCanvas(glyph: string, color: number): HTMLCanvasElement {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  const hex = `#${color.toString(16).padStart(6, '0')}`;
  const fontSize = size * 0.65;

  ctx.font = `${fontSize}px serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.strokeStyle = 'rgba(0,0,0,0.9)';
  ctx.lineWidth = 5;
  ctx.strokeText(glyph, size / 2, size / 2);
  ctx.fillStyle = hex;
  ctx.fillText(glyph, size / 2, size / 2);

  return canvas;
}

export function createZodiacBelt(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'zodiacBelt';

  // Thin circle outline for the ecliptic path (replaces the colored torus)
  const eclipticCirclePoints: THREE.Vector3[] = [];
  for (let i = 0; i <= 360; i++) {
    const rad = degreesToRadians(i);
    eclipticCirclePoints.push(new THREE.Vector3(
      BELT_RADIUS * Math.cos(rad), 0, -BELT_RADIUS * Math.sin(rad)
    ));
  }
  const eclipticGeom = new THREE.BufferGeometry().setFromPoints(eclipticCirclePoints);
  const eclipticMat = new THREE.LineBasicMaterial({
    color: 0x333344,
    transparent: true,
    opacity: 0.4,
  });
  const eclipticLine = new THREE.Line(eclipticGeom, eclipticMat);
  group.add(eclipticLine);

  for (const sign of ZODIAC_SIGNS) {
    const startAngle = degreesToRadians(sign.startDegree);

    // Thin radial tick mark at each sign boundary
    const inner = BELT_RADIUS - 1.5;
    const outer = BELT_RADIUS + 1.5;
    const tickGeom = new THREE.BufferGeometry();
    tickGeom.setAttribute('position', new THREE.Float32BufferAttribute([
      inner * Math.cos(startAngle), 0, -inner * Math.sin(startAngle),
      outer * Math.cos(startAngle), 0, -outer * Math.sin(startAngle),
    ], 3));
    const elementColor = ELEMENT_COLORS[sign.element];
    const tickMat = new THREE.LineBasicMaterial({
      color: elementColor,
      transparent: true,
      opacity: 0.5,
    });
    const tick = new THREE.Line(tickGeom, tickMat);
    group.add(tick);

    // Invisible raycast mesh for sign selection (flat ring segment)
    // RingGeometry angles go counter-clockwise in XY; after rotateX(π/2) they
    // match our ecliptic convention (longitude increases toward -Z)
    const selectGeom = new THREE.RingGeometry(
      BELT_RADIUS - 3,
      BELT_RADIUS + 3,
      16, 1,
      startAngle,
      degreesToRadians(30)
    );
    selectGeom.rotateX(-Math.PI / 2);
    const selectMat = new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
    });
    const selectMesh = new THREE.Mesh(selectGeom, selectMat);
    selectMesh.name = `sign-${sign.name}`;
    selectMesh.userData = { type: 'sign', signIndex: sign.index, signName: sign.name };
    group.add(selectMesh);

    // Sign glyph — high-quality vector label
    const labelAngle = degreesToRadians(sign.startDegree + 15);
    const labelR = BELT_RADIUS;
    const spriteScale = 3.5;

    const canvas = createGlyphCanvas(sign.glyph, elementColor);
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.position.set(
      labelR * Math.cos(labelAngle),
      2,
      -labelR * Math.sin(labelAngle)
    );
    sprite.scale.set(spriteScale, spriteScale, 1);
    sprite.name = `label-${sign.name}`;
    group.add(sprite);
  }

  return group;
}

export const BELT_RADIUS_EXPORT = BELT_RADIUS;
