import * as THREE from 'three';
import { store } from './state/store.js';
import { computePositions } from './ephemeris/planets.js';
import { computeWholeSignHouses } from './ephemeris/houses.js';
import { findCurrentTransit } from './ephemeris/transits.js';
import { getDignity } from './ephemeris/dignity.js';
import { createRenderer } from './scene/renderer.js';
import { createCamera, createControls } from './scene/camera.js';
import { buildScene } from './scene/scene-graph.js';
import { createComposer } from './scene/postprocessing.js';
import { Interaction } from './scene/interaction.js';
import { AnimationLoop } from './scene/animation.js';
import { createOverlay, showWelcomeInPanel } from './ui/overlay.js';
import { createDateTimePicker } from './ui/datetime-picker.js';
import { createCitySearch } from './ui/city-search.js';
import { createTimeScrubber } from './ui/time-scrubber.js';
import { createInfoPanel, updateInfoPanel } from './ui/info-panel.js';
import type { PlanetId, SelectedObject } from './types/astro.js';

export class App {
  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.PerspectiveCamera;
  private sceneComponents!: ReturnType<typeof buildScene>;
  private animLoop!: AnimationLoop;
  private infoPanel!: HTMLElement;
  private baseDate = new Date();

  constructor(private container: HTMLElement) {}

  init(): void {
    // 3D setup
    this.renderer = createRenderer(this.container);
    this.camera = createCamera(this.container);
    const controls = createControls(this.camera, this.renderer.domElement);

    this.sceneComponents = buildScene();
    const { scene, planetVisuals, houseVisuals, highlightSystem, ascGroup, polarisGroup } = this.sceneComponents;

    const composer = createComposer(this.renderer, scene, this.camera);
    this.animLoop = new AnimationLoop(composer, controls);

    // Interaction — only raycast against planets, zodiac belt, constellations (NOT Earth/starfield)
    const interaction = new Interaction(this.camera, scene, this.renderer.domElement, (obj) => {
      store.setState({ selectedObject: obj });
    });
    interaction.setTargets([
      ascGroup,
      planetVisuals.group,
      this.sceneComponents.zodiacBelt,
      this.sceneComponents.constellationGroup,
      polarisGroup,
    ]);

    // UI
    const overlay = createOverlay();
    this.container.appendChild(overlay);

    // Top toolbar: date picker + city search in a single row
    const toolbar = document.createElement('div');
    toolbar.style.cssText = `
      position: absolute;
      top: 12px; left: 12px;
      pointer-events: auto;
      display: flex;
      gap: 8px;
      align-items: center;
      background: rgba(0,0,0,0.75);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 8px;
      padding: 6px 10px;
      backdrop-filter: blur(8px);
    `;

    const datePicker = createDateTimePicker((date) => {
      this.baseDate = date;
      store.setState({ date });
    }, store.getState().date);
    toolbar.appendChild(datePicker.element);

    const citySearch = createCitySearch((lat, lng, tz) => {
      store.setState({ latitude: lat, longitude: lng, timezone: tz });
    });
    toolbar.appendChild(citySearch);

    overlay.appendChild(toolbar);

    const timeScrubber = createTimeScrubber((days) => {
      const d = new Date(this.baseDate.getTime() + days * 86400000);
      datePicker.setDate(d);
      store.setState({ date: d });
    });
    overlay.appendChild(timeScrubber);

    this.infoPanel = createInfoPanel();
    overlay.appendChild(this.infoPanel);

    // State subscriptions
    store.subscribe('date', () => this.recalculate());
    store.subscribe('latitude', () => this.recalculate());
    store.subscribe('longitude', () => this.recalculate());

    store.subscribe('planetPositions', (positions) => {
      planetVisuals.update(positions);
    });

    store.subscribe('houses', (houses) => {
      houseVisuals.update(houses);
    });

    store.subscribe('selectedObject', (selected) => {
      const s = store.getState();
      highlightSystem.update(selected, s.planetPositions, s.houses);
      this.handleSelection(selected);
      updateInfoPanel(this.infoPanel, s);
    });

    // Initial calculation
    this.recalculate();

    // Start render loop
    this.animLoop.start();

    // Auto-update every second (planets move, clock ticks)
    setInterval(() => {
      if (!store.getState().natalMode) {
        store.setState({ date: new Date() });
      }
    }, 1000);

    // Welcome message in the info panel (dismissed on first selection)
    showWelcomeInPanel(this.infoPanel);

    // Mark ready
    store.setState({ loading: false, ready: true });
  }

  private recalculate(): void {
    const state = store.getState();
    const positions = computePositions(state.date);
    store.setState({ planetPositions: positions });

    if (state.latitude !== 0 || state.longitude !== 0) {
      const houses = computeWholeSignHouses(state.date, state.latitude, state.longitude);
      store.setState({ houses, natalMode: true });
    }
  }

  private handleSelection(selected: SelectedObject | null): void {
    if (!selected) {
      store.setState({ currentTransit: null, selectedDignity: null });
      return;
    }

    if (selected.type === 'planet') {
      const planetId = selected.id as PlanetId;
      const transit = findCurrentTransit(planetId, store.getState().date);
      const pos = store.getState().planetPositions.get(planetId);
      const dignity = pos ? getDignity(planetId, pos.signIndex) : null;
      store.setState({ currentTransit: transit, selectedDignity: dignity });
    }
  }

  // Public API for tests
  setDate(year: number, month: number, day: number, hour: number, minute: number): void {
    const d = new Date(year, month - 1, day, hour, minute);
    this.baseDate = d;
    store.setState({ date: d });
  }

  setNatalChart(params: {
    year: number; month: number; day: number;
    hour: number; minute: number;
    lat: number; lng: number; timezone: string;
  }): void {
    const d = new Date(params.year, params.month - 1, params.day, params.hour, params.minute);
    this.baseDate = d;
    store.setState({
      date: d,
      latitude: params.lat,
      longitude: params.lng,
      timezone: params.timezone,
    });
  }

  selectPlanet(id: string): void {
    store.setState({ selectedObject: { type: 'planet', id } });
  }

  getPlanetScreenPos(id: string): { x: number; y: number } | null {
    return this.sceneComponents.planetVisuals.getScreenPos(
      id as PlanetId, this.camera, this.renderer
    );
  }

  get store() { return store; }
  get scene() { return this.sceneComponents; }
  get cameraObj() { return this.camera; }
}
