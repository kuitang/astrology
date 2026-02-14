import * as THREE from 'three';
import type { HouseCusps } from '../types/astro.js';
import { degreesToRadians } from '../utils/math.js';

/** Ascendant rendered like a planet: small marker + glyph label above it */
const ASC_ORBIT_RADIUS = 13; // Same zone as planets (Sun=12, Mars=14)
const ASC_LINE_LENGTH = 28;  // Half-line extends to zodiac belt
const ASC_COLOR = 0xff4444;
const ASC_SIZE = 0.6;        // Similar to planet sphere size

export class HouseVisuals {
  group: THREE.Group;
  /** Separate group for ASC hit target — added to raycast targets */
  ascGroup: THREE.Group;
  private ascLine: THREE.Line | null = null;
  private ascMarker: THREE.Mesh | null = null;
  private ascLabel: THREE.Sprite | null = null;
  private ascHitMesh: THREE.Mesh | null = null;

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'houseGroup';
    this.group.visible = false;

    this.ascGroup = new THREE.Group();
    this.ascGroup.name = 'ascGroup';
  }

  update(houses: HouseCusps | null): void {
    this.clear();

    if (!houses) {
      this.group.visible = false;
      this.ascGroup.visible = false;
      return;
    }

    this.group.visible = true;
    this.ascGroup.visible = true;

    const ascRad = degreesToRadians(houses.ascendant);
    const cosA = Math.cos(ascRad);
    const sinA = -Math.sin(ascRad);
    const x = ASC_ORBIT_RADIUS * cosA;
    const z = ASC_ORBIT_RADIUS * sinA;

    // Half-line from Earth (origin) outward to zodiac belt
    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute('position', new THREE.Float32BufferAttribute([
      0, 0.1, 0,
      ASC_LINE_LENGTH * cosA, 0.1, ASC_LINE_LENGTH * sinA,
    ], 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: ASC_COLOR,
      transparent: true,
      opacity: 0.4,
    });
    this.ascLine = new THREE.Line(lineGeom, lineMat);
    this.ascLine.name = 'asc-line';
    this.group.add(this.ascLine);

    // Small sphere marker at ASC position (like a planet body)
    const markerGeom = new THREE.SphereGeometry(ASC_SIZE, 16, 16);
    const markerMat = new THREE.MeshStandardMaterial({
      color: ASC_COLOR,
      emissive: ASC_COLOR,
      emissiveIntensity: 0.6,
      roughness: 0.4,
    });
    this.ascMarker = new THREE.Mesh(markerGeom, markerMat);
    this.ascMarker.position.set(x, 0, z);
    this.ascMarker.name = 'asc-marker';
    this.group.add(this.ascMarker);

    // Glyph label above the marker (↑) — same style as planet glyphs
    const canvasSize = 128;
    const canvas = document.createElement('canvas');
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    const ctx = canvas.getContext('2d')!;
    ctx.font = '96px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.strokeStyle = 'rgba(0,0,0,0.8)';
    ctx.lineWidth = 4;
    ctx.strokeText('↑', canvasSize / 2, canvasSize / 2);
    ctx.fillStyle = '#ff4444';
    ctx.fillText('↑', canvasSize / 2, canvasSize / 2);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
    this.ascLabel = new THREE.Sprite(spriteMat);
    this.ascLabel.position.set(x, ASC_SIZE + 1.5, z); // Above marker, like planets
    this.ascLabel.scale.set(3.0, 3.0, 1); // Same scale as planet glyphs
    this.ascLabel.name = 'asc-label';
    this.group.add(this.ascLabel);

    // Clickable hit target — invisible sphere at ASC position
    const hitGeom = new THREE.SphereGeometry(2.5, 8, 8);
    const hitMat = new THREE.MeshBasicMaterial({
      transparent: true, opacity: 0, depthWrite: false,
    });
    this.ascHitMesh = new THREE.Mesh(hitGeom, hitMat);
    this.ascHitMesh.position.set(x, 0, z);
    this.ascHitMesh.name = 'asc-hit';
    this.ascHitMesh.userData = { type: 'rising' };
    this.ascGroup.add(this.ascHitMesh);
  }

  private clear(): void {
    if (this.ascLine) {
      this.group.remove(this.ascLine);
      this.ascLine.geometry.dispose();
      (this.ascLine.material as THREE.Material).dispose();
      this.ascLine = null;
    }
    if (this.ascMarker) {
      this.group.remove(this.ascMarker);
      this.ascMarker.geometry.dispose();
      (this.ascMarker.material as THREE.Material).dispose();
      this.ascMarker = null;
    }
    if (this.ascLabel) {
      this.group.remove(this.ascLabel);
      (this.ascLabel.material as THREE.SpriteMaterial).map?.dispose();
      this.ascLabel.material.dispose();
      this.ascLabel = null;
    }
    if (this.ascHitMesh) {
      this.ascGroup.remove(this.ascHitMesh);
      this.ascHitMesh.geometry.dispose();
      (this.ascHitMesh.material as THREE.Material).dispose();
      this.ascHitMesh = null;
    }
  }
}
