import * as THREE from 'three';
import type { PlanetId, PlanetPosition } from '../types/astro.js';
import { PLANETS, PLANET_MAP } from '../data/planet-metadata.js';
import { eclipticToCartesian } from '../utils/math.js';
import { isMobile } from '../utils/responsive.js';

/** Create a procedural planet texture with color variation */
function createPlanetTexture(baseColor: number, name: string): THREE.Texture {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  const r = (baseColor >> 16) & 0xff;
  const g = (baseColor >> 8) & 0xff;
  const b = baseColor & 0xff;

  // Fill base
  ctx.fillStyle = `rgb(${r},${g},${b})`;
  ctx.fillRect(0, 0, size, size);

  // Add some noise/variation
  for (let i = 0; i < 200; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const s = 2 + Math.random() * 6;
    const variation = 0.7 + Math.random() * 0.6;
    ctx.fillStyle = `rgba(${Math.floor(r * variation)},${Math.floor(g * variation)},${Math.floor(b * variation)},0.4)`;
    ctx.fillRect(x, y, s, s * 0.5);
  }

  // Sun gets a bright glow center
  if (name === 'Sun') {
    const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    grad.addColorStop(0, 'rgba(255,255,200,0.9)');
    grad.addColorStop(0.4, 'rgba(255,220,100,0.4)');
    grad.addColorStop(1, 'rgba(255,180,50,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
  }

  // Moon gets craters
  if (name === 'Moon') {
    for (let i = 0; i < 15; i++) {
      const cx = Math.random() * size;
      const cy = Math.random() * size;
      const cr = 3 + Math.random() * 8;
      ctx.beginPath();
      ctx.arc(cx, cy, cr, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(100,100,100,0.3)`;
      ctx.fill();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

export class PlanetVisuals {
  group: THREE.Group;
  private meshes = new Map<PlanetId, THREE.Mesh>();
  private labels = new Map<PlanetId, THREE.Sprite>();
  private arcs = new Map<PlanetId, THREE.Line>();

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'planetGroup';
    const mobile = isMobile();

    for (const meta of PLANETS) {
      // Planet sphere with procedural texture
      const geometry = new THREE.SphereGeometry(meta.size, 32, 32);
      const texture = createPlanetTexture(meta.color, meta.name);
      const shouldGlow = meta.id === 'Sun' || meta.id === 'Moon';
      const material = new THREE.MeshStandardMaterial({
        map: texture,
        emissive: shouldGlow ? meta.color : 0x000000,
        emissiveIntensity: meta.id === 'Sun' ? 1.0 : meta.id === 'Moon' ? 0.4 : 0,
        roughness: 0.6,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.name = `planet-${meta.id}`;
      mesh.userData = { type: 'planet', planetId: meta.id };
      this.meshes.set(meta.id, mesh);
      this.group.add(mesh);

      // Glyph label — bigger on mobile
      const canvasSize = mobile ? 128 : 64;
      const fontSize = mobile ? 96 : 48;
      const spriteScale = mobile ? 3.5 : 1.8;

      const canvas = document.createElement('canvas');
      canvas.width = canvasSize;
      canvas.height = canvasSize;
      const ctx = canvas.getContext('2d')!;
      ctx.font = `${fontSize}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      // White outline for readability
      ctx.strokeStyle = 'rgba(0,0,0,0.8)';
      ctx.lineWidth = 4;
      ctx.strokeText(meta.glyph, canvasSize / 2, canvasSize / 2);
      ctx.fillStyle = `#${meta.color.toString(16).padStart(6, '0')}`;
      ctx.fillText(meta.glyph, canvasSize / 2, canvasSize / 2);
      const labelTexture = new THREE.CanvasTexture(canvas);
      const spriteMat = new THREE.SpriteMaterial({ map: labelTexture, transparent: true });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(spriteScale, spriteScale, 1);
      this.labels.set(meta.id, sprite);
      this.group.add(sprite);
    }
  }

  update(positions: Map<PlanetId, PlanetPosition>): void {
    for (const [id, pos] of positions) {
      const meta = PLANET_MAP.get(id);
      if (!meta) continue;

      const [x, y, z] = eclipticToCartesian(pos.longitude, pos.latitude, meta.orbitRadius);
      const mesh = this.meshes.get(id);
      if (mesh) {
        mesh.position.set(x, y, z);
      }

      const label = this.labels.get(id);
      if (label) {
        label.position.set(x, y + meta.size + 1.5, z);
      }

      // Curved direction arc
      this.updateDirectionArc(id, pos, meta.orbitRadius);
    }
  }

  /** Draw a curved arc showing the planet's direction of motion */
  private updateDirectionArc(id: PlanetId, pos: PlanetPosition, radius: number): void {
    const existing = this.arcs.get(id);
    if (existing) {
      this.group.remove(existing);
      existing.geometry.dispose();
      (existing.material as THREE.Material).dispose();
    }

    const isRetrograde = pos.speed < 0;
    const arcLength = 8; // degrees of arc to draw
    const startDeg = pos.longitude;
    const endDeg = isRetrograde ? startDeg - arcLength : startDeg + arcLength;

    const segments = 16;
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const deg = startDeg + (endDeg - startDeg) * t;
      const rad = deg * Math.PI / 180;
      const latRad = pos.latitude * Math.PI / 180;
      points.push(new THREE.Vector3(
        radius * Math.cos(latRad) * Math.cos(rad),
        radius * Math.sin(latRad),
        -radius * Math.cos(latRad) * Math.sin(rad)
      ));
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const color = isRetrograde ? 0xff4444 : 0x44ff44;
    const material = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.7,
    });
    const line = new THREE.Line(geometry, material);
    line.name = `arc-${id}`;
    this.arcs.set(id, line);
    this.group.add(line);

    // Arrowhead at the end of the arc
    const last = points[points.length - 1]!;
    const prev = points[points.length - 2]!;
    const dir = new THREE.Vector3().subVectors(last, prev).normalize();
    const arrowHelper = new THREE.ArrowHelper(dir, last, 0.8, color, 0.4, 0.2);
    // Store with the line for cleanup
    line.add(arrowHelper);
  }

  getScreenPos(id: PlanetId, camera: THREE.Camera, renderer: THREE.WebGLRenderer): { x: number; y: number } | null {
    const mesh = this.meshes.get(id);
    if (!mesh) return null;
    const vec = mesh.position.clone();
    vec.project(camera);
    const size = renderer.getSize(new THREE.Vector2());
    return {
      x: (vec.x * 0.5 + 0.5) * size.x,
      y: (-vec.y * 0.5 + 0.5) * size.y,
    };
  }
}
