import * as THREE from 'three';
import type { HouseCusps } from '../types/astro.js';
import { degreesToRadians } from '../utils/math.js';

const HOUSE_LINE_RADIUS = 28;
const BELT_RADIUS = 25;

export class HouseVisuals {
  group: THREE.Group;
  /** Separate group for ASC hit target — added to raycast targets */
  ascGroup: THREE.Group;
  private lines: THREE.Line[] = [];
  private markers: THREE.Sprite[] = [];
  private horizonLine: THREE.Line | null = null;
  private ascHitMesh: THREE.Mesh | null = null;

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'houseGroup';
    this.group.visible = false;

    this.ascGroup = new THREE.Group();
    this.ascGroup.name = 'ascGroup';
  }

  update(houses: HouseCusps | null): void {
    // Clear existing lines
    for (const line of this.lines) {
      this.group.remove(line);
      line.geometry.dispose();
      (line.material as THREE.Material).dispose();
    }
    this.lines = [];

    // Clear existing markers
    for (const sprite of this.markers) {
      this.group.remove(sprite);
      (sprite.material as THREE.SpriteMaterial).map?.dispose();
      sprite.material.dispose();
    }
    this.markers = [];

    // Clear horizon line
    if (this.horizonLine) {
      this.group.remove(this.horizonLine);
      this.horizonLine.geometry.dispose();
      (this.horizonLine.material as THREE.Material).dispose();
      this.horizonLine = null;
    }

    // Clear ASC hit target
    if (this.ascHitMesh) {
      this.ascGroup.remove(this.ascHitMesh);
      this.ascHitMesh.geometry.dispose();
      (this.ascHitMesh.material as THREE.Material).dispose();
      this.ascHitMesh = null;
    }

    if (!houses) {
      this.group.visible = false;
      this.ascGroup.visible = false;
      return;
    }

    this.group.visible = true;
    this.ascGroup.visible = true;

    for (let i = 0; i < 12; i++) {
      const cuspDeg = houses.cusps[i]!;
      const lonRad = degreesToRadians(cuspDeg);

      const geometry = new THREE.BufferGeometry();
      const points = [
        0, 0, 0,
        HOUSE_LINE_RADIUS * Math.cos(lonRad), 0, -HOUSE_LINE_RADIUS * Math.sin(lonRad),
      ];
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));

      const isAngle = i === 0 || i === 3 || i === 6 || i === 9;
      const material = new THREE.LineBasicMaterial({
        color: isAngle ? 0xffaa00 : 0x555555,
        transparent: true,
        opacity: isAngle ? 0.8 : 0.4,
      });

      const line = new THREE.Line(geometry, material);
      line.name = `house-line-${i + 1}`;
      this.lines.push(line);
      this.group.add(line);
    }

    // Bright horizon line ASC ↔ DSC (full diameter across orrery)
    const ascRad = degreesToRadians(houses.ascendant);
    const dscRad = degreesToRadians((houses.ascendant + 180) % 360);
    const horizonGeom = new THREE.BufferGeometry();
    horizonGeom.setAttribute('position', new THREE.Float32BufferAttribute([
      (BELT_RADIUS + 3) * Math.cos(dscRad), 0.15, -(BELT_RADIUS + 3) * Math.sin(dscRad),
      0, 0.15, 0,
      (BELT_RADIUS + 3) * Math.cos(ascRad), 0.15, -(BELT_RADIUS + 3) * Math.sin(ascRad),
    ], 3));
    const horizonMat = new THREE.LineBasicMaterial({
      color: 0xff4444,
      transparent: true,
      opacity: 0.6,
    });
    this.horizonLine = new THREE.Line(horizonGeom, horizonMat);
    this.horizonLine.name = 'horizon-line';
    this.group.add(this.horizonLine);

    // ASC marker (prominent, large label)
    this.addAngleMarker(houses.ascendant, 'ASC ↑', 0xff4444, true);
    // MC marker
    this.addAngleMarker(houses.mc, 'MC', 0xffaa00, false);

    // Clickable ASC hit target — large sphere on the belt at ascendant
    const hitRadius = 3;
    const hitGeom = new THREE.SphereGeometry(hitRadius, 8, 8);
    const hitMat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, side: THREE.DoubleSide });
    this.ascHitMesh = new THREE.Mesh(hitGeom, hitMat);
    this.ascHitMesh.position.set(
      BELT_RADIUS * Math.cos(ascRad), 0, -BELT_RADIUS * Math.sin(ascRad)
    );
    this.ascHitMesh.name = 'asc-hit';
    this.ascHitMesh.userData = { type: 'rising' };
    this.ascGroup.add(this.ascHitMesh);
  }

  private addAngleMarker(deg: number, label: string, color: number, large: boolean): void {
    const lonRad = degreesToRadians(deg);
    const r = HOUSE_LINE_RADIUS + 2;

    const canvasW = large ? 128 : 64;
    const canvasH = large ? 48 : 32;
    const fontSize = large ? 28 : 20;

    const canvas = document.createElement('canvas');
    canvas.width = canvasW;
    canvas.height = canvasH;
    const ctx = canvas.getContext('2d')!;
    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    // Black outline for readability
    ctx.strokeStyle = 'rgba(0,0,0,0.8)';
    ctx.lineWidth = 3;
    ctx.strokeText(label, canvasW / 2, canvasH / 2);
    ctx.fillStyle = `#${color.toString(16).padStart(6, '0')}`;
    ctx.fillText(label, canvasW / 2, canvasH / 2);
    const texture = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.position.set(
      r * Math.cos(lonRad), large ? 1.5 : 0, -r * Math.sin(lonRad)
    );
    const scale = large ? 3.5 : 2;
    sprite.scale.set(scale, scale * (canvasH / canvasW), 1);
    this.markers.push(sprite);
    this.group.add(sprite);
  }
}
