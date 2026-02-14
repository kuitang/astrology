import * as THREE from 'three';
import type { SelectedObject, PlanetPosition, PlanetId } from '../types/astro.js';
import { ZODIAC_SIGNS, ELEMENT_COLORS } from '../data/zodiac-signs.js';
import { PLANET_MAP } from '../data/planet-metadata.js';
import { degreesToRadians, eclipticToCartesian } from '../utils/math.js';

const BELT_RADIUS = 25;
const SECTOR_OPACITY = 0.12;

export class HighlightSystem {
  group: THREE.Group;
  private objects: THREE.Object3D[] = [];

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'selectionHighlightGroup';
  }

  clear(): void {
    for (const obj of this.objects) {
      this.group.remove(obj);
      if (obj instanceof THREE.Mesh || obj instanceof THREE.Line) {
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach(m => m.dispose());
        } else {
          (obj.material as THREE.Material).dispose();
        }
      }
    }
    this.objects = [];
  }

  update(selected: SelectedObject | null, positions?: Map<PlanetId, PlanetPosition>): void {
    this.clear();
    if (!selected) return;

    if (selected.type === 'sign') {
      const signIndex = parseInt(selected.id, 10);
      this.drawSectorWedge(signIndex);
    } else if (selected.type === 'planet' && positions) {
      const pos = positions.get(selected.id as PlanetId);
      if (pos) {
        // Highlight the sign the planet is in
        this.drawSectorWedge(pos.signIndex);
        // Draw projection line from planet to sign belt
        this.drawProjectionLine(pos);
      }
    }
  }

  /** Draw a filled wedge sector from Earth to the zodiac belt for a sign */
  private drawSectorWedge(signIndex: number): void {
    const sign = ZODIAC_SIGNS[signIndex];
    if (!sign) return;

    const color = new THREE.Color(ELEMENT_COLORS[sign.element]);
    const startRad = degreesToRadians(sign.startDegree);
    const endRad = degreesToRadians(sign.startDegree + 30);
    const segments = 32;

    // Build a filled sector shape (triangle fan from origin)
    // Lift slightly above ecliptic plane (y=0.1) to avoid z-fighting with belt
    const Y_OFFSET = 0.1;
    const vertices: number[] = [];
    for (let i = 0; i < segments; i++) {
      {
        const a1 = startRad + (endRad - startRad) * (i / segments);
        const a2 = startRad + (endRad - startRad) * ((i + 1) / segments);
        vertices.push(0, Y_OFFSET, 0);
        vertices.push(
          (BELT_RADIUS + 2) * Math.cos(a1), Y_OFFSET,
          -(BELT_RADIUS + 2) * Math.sin(a1)
        );
        vertices.push(
          (BELT_RADIUS + 2) * Math.cos(a2), Y_OFFSET,
          -(BELT_RADIUS + 2) * Math.sin(a2)
        );
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: SECTOR_OPACITY,
      side: THREE.DoubleSide,
      depthWrite: false,
      depthTest: false,
    });

    const sector = new THREE.Mesh(geometry, material);
    sector.name = 'sector-highlight';
    sector.renderOrder = 1; // Render after belt
    this.objects.push(sector);
    this.group.add(sector);

    // Bright outline arc at the belt edge
    const arcPoints: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const angle = startRad + (endRad - startRad) * (i / segments);
      arcPoints.push(new THREE.Vector3(
        (BELT_RADIUS + 2) * Math.cos(angle),
        Y_OFFSET,
        -(BELT_RADIUS + 2) * Math.sin(angle)
      ));
    }
    const arcGeom = new THREE.BufferGeometry().setFromPoints(arcPoints);
    const arcMat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.6 });
    const arcLine = new THREE.Line(arcGeom, arcMat);
    arcLine.renderOrder = 2;
    this.objects.push(arcLine);
    this.group.add(arcLine);

    // Radial boundary lines
    for (const angle of [startRad, endRad]) {
      const lineGeom = new THREE.BufferGeometry();
      lineGeom.setAttribute('position', new THREE.Float32BufferAttribute([
        0, Y_OFFSET, 0,
        (BELT_RADIUS + 2) * Math.cos(angle), Y_OFFSET, -(BELT_RADIUS + 2) * Math.sin(angle),
      ], 3));
      const lineMat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.3 });
      const line = new THREE.Line(lineGeom, lineMat);
      line.renderOrder = 2;
      this.objects.push(line);
      this.group.add(line);
    }
  }

  /** Draw a dashed line from the planet position projected down to the sign belt */
  private drawProjectionLine(pos: PlanetPosition): void {
    const meta = PLANET_MAP.get(pos.id);
    if (!meta) return;

    const [px, py, pz] = eclipticToCartesian(pos.longitude, pos.latitude, meta.orbitRadius);
    // Project to belt (same longitude, zero latitude, at belt radius)
    const lonRad = degreesToRadians(pos.longitude);
    const beltX = BELT_RADIUS * Math.cos(lonRad);
    const beltZ = -BELT_RADIUS * Math.sin(lonRad);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute([
      px, py, pz,
      beltX, 0, beltZ,
    ], 3));

    const material = new THREE.LineDashedMaterial({
      color: meta.color,
      dashSize: 0.5,
      gapSize: 0.3,
      transparent: true,
      opacity: 0.7,
    });

    const line = new THREE.Line(geometry, material);
    line.computeLineDistances(); // required for dashed lines
    this.objects.push(line);
    this.group.add(line);

    // Also draw a line from Earth (origin) to planet
    const earthLine = new THREE.BufferGeometry();
    earthLine.setAttribute('position', new THREE.Float32BufferAttribute([
      0, 0, 0,
      px, py, pz,
    ], 3));
    const earthLineMat = new THREE.LineDashedMaterial({
      color: meta.color,
      dashSize: 0.8,
      gapSize: 0.4,
      transparent: true,
      opacity: 0.3,
    });
    const eLine = new THREE.Line(earthLine, earthLineMat);
    eLine.computeLineDistances();
    this.objects.push(eLine);
    this.group.add(eLine);
  }
}
