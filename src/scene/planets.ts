import * as THREE from 'three';
import type { PlanetId, PlanetPosition } from '../types/astro.js';
import { PLANETS, PLANET_MAP } from '../data/planet-metadata.js';
import { eclipticToCartesian } from '../utils/math.js';

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

// Reusable scratch vectors to avoid per-frame allocations
const _tempDir = new THREE.Vector3();
const _upVec = new THREE.Vector3(0, 1, 0);
const _projVec = new THREE.Vector3();
const _sizeVec = new THREE.Vector2();

const ARC_SEGMENTS = 16;
const ARC_VERTS = ARC_SEGMENTS + 1;

export class PlanetVisuals {
  group: THREE.Group;
  private meshes = new Map<PlanetId, THREE.Mesh>();
  private hitCylinders = new Map<PlanetId, THREE.Mesh>();
  private labels = new Map<PlanetId, THREE.Sprite>();
  private arcs = new Map<PlanetId, THREE.Line>();
  private arrowheads = new Map<PlanetId, THREE.Mesh>();

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'planetGroup';

    // Shared arrowhead geometry (reused for all planets)
    const arrowGeom = new THREE.ConeGeometry(0.2, 0.5, 6);
    arrowGeom.rotateX(Math.PI / 2);

    for (const meta of PLANETS) {
      // Planet sphere with procedural texture
      const geometry = new THREE.SphereGeometry(meta.size, 32, 32);
      const texture = createPlanetTexture(meta.color, meta.name);
      const shouldGlow = meta.id === 'Sun' || meta.id === 'Moon';
      const material = new THREE.MeshStandardMaterial({
        map: texture,
        emissive: shouldGlow ? meta.color : 0x000000,
        emissiveIntensity: meta.id === 'Sun' ? 1.0 : meta.id === 'Moon' ? 0.8 : 0,
        roughness: 0.6,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.name = `planet-${meta.id}`;
      mesh.userData = { type: 'planet', planetId: meta.id };
      this.meshes.set(meta.id, mesh);
      this.group.add(mesh);

      // Try to load real texture (gracefully degrade to procedural if not found)
      const loader = new THREE.TextureLoader();
      loader.load(
        import.meta.env.BASE_URL + 'textures/planets/' + meta.id.toLowerCase() + '.jpg',
        (realTexture) => {
          material.map = realTexture;
          material.needsUpdate = true;
        },
        undefined,
        () => {
          // Texture not found — keep procedural look
        }
      );

      // Invisible hit cylinder from planet radius out toward the belt (radius 28)
      // Stops before the belt to avoid blocking constellation clicks behind it
      const hitRadius = 1.5;
      const hitLength = Math.max(2, 27 - meta.orbitRadius);
      const hitGeom = new THREE.CylinderGeometry(hitRadius, hitRadius, hitLength, 8);
      hitGeom.rotateZ(Math.PI / 2);
      const hitMat = new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
      });
      const hitCyl = new THREE.Mesh(hitGeom, hitMat);
      hitCyl.name = `planet-hit-${meta.id}`;
      hitCyl.userData = { type: 'planet', planetId: meta.id };
      this.hitCylinders.set(meta.id, hitCyl);
      this.group.add(hitCyl);

      // Pre-create arc line with buffer (updated in-place later)
      const arcPositions = new Float32Array(ARC_VERTS * 3);
      const arcGeom = new THREE.BufferGeometry();
      arcGeom.setAttribute('position', new THREE.BufferAttribute(arcPositions, 3));
      const arcMat = new THREE.LineBasicMaterial({
        color: 0x44ff44,
        transparent: true,
        opacity: 0.7,
      });
      const arcLine = new THREE.Line(arcGeom, arcMat);
      arcLine.name = `arc-${meta.id}`;
      arcLine.frustumCulled = false;
      this.arcs.set(meta.id, arcLine);
      this.group.add(arcLine);

      // Pre-create arrowhead cone (shared geometry, individual material)
      const arrowMat = new THREE.MeshBasicMaterial({
        color: 0x44ff44,
        transparent: true,
        opacity: 0.7,
      });
      const arrow = new THREE.Mesh(arrowGeom, arrowMat);
      arrow.name = `arrow-${meta.id}`;
      this.arrowheads.set(meta.id, arrow);
      this.group.add(arrow);

      // Glyph label — use larger size for all devices (touch-friendly)
      const canvasSize = 128;
      const fontSize = 96;
      const spriteScale = 3.0;

      const canvas = document.createElement('canvas');
      canvas.width = canvasSize;
      canvas.height = canvasSize;
      const ctx = canvas.getContext('2d')!;
      ctx.font = `${fontSize}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
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

      // Position hit cylinder from planet outward along the radial direction
      const hitCyl = this.hitCylinders.get(id);
      if (hitCyl) {
        const midRadius = (meta.orbitRadius + 27) / 2;
        const [mx, my, mz] = eclipticToCartesian(pos.longitude, pos.latitude, midRadius);
        hitCyl.position.set(mx, my, mz);
        _tempDir.set(x, y, z).normalize();
        hitCyl.quaternion.setFromUnitVectors(_upVec, _tempDir);
      }

      // Update direction arc in-place (no allocation)
      this.updateDirectionArc(id, pos, meta.orbitRadius);
    }
  }

  /** Update arc line buffer in-place — no geometry/material allocation */
  private updateDirectionArc(id: PlanetId, pos: PlanetPosition, radius: number): void {
    const arcLine = this.arcs.get(id);
    if (!arcLine) return;

    const isRetrograde = pos.speed < 0;
    const arcLength = 8;
    const startDeg = pos.longitude;
    const endDeg = isRetrograde ? startDeg - arcLength : startDeg + arcLength;
    const color = isRetrograde ? 0xff4444 : 0x44ff44;

    const posAttr = arcLine.geometry.getAttribute('position') as THREE.BufferAttribute;
    const latRad = pos.latitude * Math.PI / 180;
    const cosLat = Math.cos(latRad);
    const sinLat = Math.sin(latRad);

    let lastX = 0, lastY = 0, lastZ = 0;
    let prevX = 0, prevY = 0, prevZ = 0;

    for (let i = 0; i <= ARC_SEGMENTS; i++) {
      const t = i / ARC_SEGMENTS;
      const deg = startDeg + (endDeg - startDeg) * t;
      const rad = deg * Math.PI / 180;
      const px = radius * cosLat * Math.cos(rad);
      const py = radius * sinLat;
      const pz = -radius * cosLat * Math.sin(rad);
      posAttr.setXYZ(i, px, py, pz);

      if (i === ARC_SEGMENTS - 1) { prevX = px; prevY = py; prevZ = pz; }
      if (i === ARC_SEGMENTS) { lastX = px; lastY = py; lastZ = pz; }
    }
    posAttr.needsUpdate = true;
    arcLine.geometry.setDrawRange(0, ARC_VERTS);
    (arcLine.material as THREE.LineBasicMaterial).color.set(color);

    // Update arrowhead position and orientation
    const arrow = this.arrowheads.get(id);
    if (arrow) {
      arrow.position.set(lastX, lastY, lastZ);
      _tempDir.set(lastX - prevX, lastY - prevY, lastZ - prevZ).normalize();
      arrow.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), _tempDir);
      (arrow.material as THREE.MeshBasicMaterial).color.set(color);
    }
  }

  getScreenPos(id: PlanetId, camera: THREE.Camera, renderer: THREE.WebGLRenderer): { x: number; y: number } | null {
    const mesh = this.meshes.get(id);
    if (!mesh) return null;
    _projVec.copy(mesh.position).project(camera);
    renderer.getSize(_sizeVec);
    return {
      x: (_projVec.x * 0.5 + 0.5) * _sizeVec.x,
      y: (-_projVec.y * 0.5 + 0.5) * _sizeVec.y,
    };
  }
}
