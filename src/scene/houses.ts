import * as THREE from 'three';
import type { HouseCusps } from '../types/astro.js';
import { degreesToRadians } from '../utils/math.js';

const HOUSE_LINE_RADIUS = 28;

export class HouseVisuals {
  group: THREE.Group;
  private lines: THREE.Line[] = [];
  private markers: THREE.Sprite[] = [];

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'houseGroup';
    this.group.visible = false;
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

    if (!houses) {
      this.group.visible = false;
      return;
    }

    this.group.visible = true;

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

    // ASC marker
    this.addAngleMarker(houses.ascendant, 'ASC', 0xff4444);
    // MC marker
    this.addAngleMarker(houses.mc, 'MC', 0xffaa00);
  }

  private addAngleMarker(deg: number, label: string, color: number): void {
    const lonRad = degreesToRadians(deg);
    const r = HOUSE_LINE_RADIUS + 2;

    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 32;
    const ctx = canvas.getContext('2d')!;
    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = `#${color.toString(16).padStart(6, '0')}`;
    ctx.fillText(label, 32, 16);
    const texture = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.position.set(
      r * Math.cos(lonRad), 0, -r * Math.sin(lonRad)
    );
    sprite.scale.set(2, 1, 1);
    this.markers.push(sprite);
    this.group.add(sprite);
  }
}
