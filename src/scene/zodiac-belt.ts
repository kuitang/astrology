import * as THREE from 'three';
import { ZODIAC_SIGNS, ELEMENT_COLORS } from '../data/zodiac-signs.js';
import { degreesToRadians } from '../utils/math.js';
import { createSignGlyph } from './zodiac-glyphs.js';

const BELT_RADIUS = 28;

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

  const TICK_HEIGHT = 3;

  for (const sign of ZODIAC_SIGNS) {
    const startAngle = degreesToRadians(sign.startDegree);
    const elementColor = ELEMENT_COLORS[sign.element];

    // Translucent vertical plane at each sign boundary tick (local to belt edge)
    const inner = BELT_RADIUS - 1.5;
    const outer = BELT_RADIUS + 1.5;
    const inX = inner * Math.cos(startAngle);
    const inZ = -inner * Math.sin(startAngle);
    const outX = outer * Math.cos(startAngle);
    const outZ = -outer * Math.sin(startAngle);
    const planeGeom = new THREE.BufferGeometry();
    const verts = new Float32Array([
      inX, -TICK_HEIGHT / 2, inZ,
      inX,  TICK_HEIGHT / 2, inZ,
      outX, -TICK_HEIGHT / 2, outZ,
      outX,  TICK_HEIGHT / 2, outZ,
    ]);
    planeGeom.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    planeGeom.setIndex([0, 1, 2, 1, 3, 2]);
    const planeMat = new THREE.MeshBasicMaterial({
      color: elementColor,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const plane = new THREE.Mesh(planeGeom, planeMat);
    plane.name = `sign-plane-${sign.name}`;
    group.add(plane);

    // Edge line on top of the plane for definition
    const tickGeom = new THREE.BufferGeometry();
    tickGeom.setAttribute('position', new THREE.Float32BufferAttribute([
      inX, 0, inZ, outX, 0, outZ,
    ], 3));
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
      depthWrite: false,
    });
    const selectMesh = new THREE.Mesh(selectGeom, selectMat);
    selectMesh.name = `sign-${sign.name}`;
    selectMesh.userData = { type: 'sign', signIndex: sign.index, signName: sign.name };
    group.add(selectMesh);

    // 3D sign glyph — tube geometry positioned at sign center
    const labelAngle = degreesToRadians(sign.startDegree + 15);
    const labelR = BELT_RADIUS;
    const glyph3d = createSignGlyph(sign.name, elementColor);
    glyph3d.position.set(
      labelR * Math.cos(labelAngle),
      2,
      -labelR * Math.sin(labelAngle)
    );
    // Face outward from center (rotate to face radially)
    glyph3d.lookAt(0, 2, 0);
    glyph3d.name = `label-${sign.name}`;
    group.add(glyph3d);
  }

  return group;
}

export const BELT_RADIUS_EXPORT = BELT_RADIUS;
