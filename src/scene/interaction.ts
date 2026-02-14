import * as THREE from 'three';
import type { SelectedObject } from '../types/astro.js';

const TAP_THRESHOLD = 5; // pixels — less than this is a tap, not a drag

export class Interaction {
  private raycaster = new THREE.Raycaster();
  private pointer = new THREE.Vector2();
  private downPos = { x: 0, y: 0 };
  private isDown = false;
  private onSelect: (obj: SelectedObject | null) => void;
  private raycastTargets: THREE.Object3D[] = [];

  constructor(
    private camera: THREE.Camera,
    _scene: THREE.Scene,
    domElement: HTMLElement,
    onSelect: (obj: SelectedObject | null) => void
  ) {
    this.onSelect = onSelect;

    domElement.addEventListener('pointerdown', (e) => {
      this.downPos = { x: e.clientX, y: e.clientY };
      this.isDown = true;
    }, { passive: true });

    domElement.addEventListener('pointerup', (e) => {
      if (!this.isDown) return;
      this.isDown = false;
      const dx = e.clientX - this.downPos.x;
      const dy = e.clientY - this.downPos.y;
      if (Math.sqrt(dx * dx + dy * dy) < TAP_THRESHOLD) {
        this.handleTap(e.clientX, e.clientY, domElement);
      }
    }, { passive: true });
  }

  /** Set the groups to raycast against (excludes Earth, starfield, etc.) */
  setTargets(targets: THREE.Object3D[]): void {
    this.raycastTargets = targets;
  }

  private handleTap(clientX: number, clientY: number, domElement: HTMLElement): void {
    const rect = domElement.getBoundingClientRect();
    this.pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.pointer, this.camera);

    // Raycast only against registered targets (planets, zodiac belt, constellations)
    const intersects = this.raycaster.intersectObjects(this.raycastTargets, true);

    // Priority: rising > planets > signs > constellations > polaris
    let risingHit: SelectedObject | null = null;
    let planetHit: SelectedObject | null = null;
    let signHit: SelectedObject | null = null;
    let constellationHit: SelectedObject | null = null;
    let polarisHit: SelectedObject | null = null;

    for (const hit of intersects) {
      const obj = hit.object;
      if (!risingHit && obj.userData?.type === 'rising') {
        risingHit = { type: 'rising', id: 'ascendant' };
      }
      if (!planetHit && obj.userData?.type === 'planet') {
        planetHit = { type: 'planet', id: obj.userData.planetId as string };
      }
      if (!signHit && obj.userData?.type === 'sign') {
        signHit = { type: 'sign', id: String(obj.userData.signIndex) };
      }
      if (!constellationHit && obj.userData?.type === 'constellation') {
        constellationHit = { type: 'constellation', id: obj.userData.name as string };
      }
      if (!polarisHit && obj.userData?.type === 'polaris') {
        polarisHit = { type: 'polaris', id: 'polaris' };
      }
    }

    const result = risingHit ?? planetHit ?? signHit ?? constellationHit ?? polarisHit;
    this.onSelect(result);
  }
}
