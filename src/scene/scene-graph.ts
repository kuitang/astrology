import * as THREE from 'three';
import { createEarth, createPolaris } from './earth.js';
import { createStarfield } from './starfield.js';
import { createZodiacBelt } from './zodiac-belt.js';
import { createConstellations } from './constellations.js';
import { PlanetVisuals } from './planets.js';
import { HouseVisuals } from './houses.js';
import { HighlightSystem } from './highlights.js';
import { OBLIQUITY } from '../ephemeris/constants.js';
import { degreesToRadians } from '../utils/math.js';

export interface SceneComponents {
  scene: THREE.Scene;
  eclipticGroup: THREE.Group;
  zodiacBelt: THREE.Group;
  constellationGroup: THREE.Group;
  planetVisuals: PlanetVisuals;
  houseVisuals: HouseVisuals;
  highlightSystem: HighlightSystem;
  earth: THREE.Group;
  polarisGroup: THREE.Group;
  ascGroup: THREE.Group;
}

export function buildScene(): SceneComponents {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000008);

  // Lighting
  const ambient = new THREE.AmbientLight(0x404050, 1.0);
  scene.add(ambient);

  const sunLight = new THREE.DirectionalLight(0xffffff, 1.5);
  sunLight.position.set(10, 5, 10);
  scene.add(sunLight);

  // Starfield loaded async from HYG catalog — added to scene when ready
  createStarfield().then(starfield => scene.add(starfield));

  // Ecliptic group — tilted by obliquity
  const eclipticGroup = new THREE.Group();
  eclipticGroup.name = 'eclipticGroup';
  eclipticGroup.rotation.x = degreesToRadians(OBLIQUITY);
  scene.add(eclipticGroup);

  // Zodiac belt
  const zodiacBelt = createZodiacBelt();
  eclipticGroup.add(zodiacBelt);

  // Constellation stick figures
  const constellationGroup = createConstellations();
  eclipticGroup.add(constellationGroup);

  // Planets
  const planetVisuals = new PlanetVisuals();
  eclipticGroup.add(planetVisuals.group);

  // Houses
  const houseVisuals = new HouseVisuals();
  eclipticGroup.add(houseVisuals.group);
  eclipticGroup.add(houseVisuals.ascGroup);

  // Highlight system
  const highlightSystem = new HighlightSystem();
  eclipticGroup.add(highlightSystem.group);

  // Earth at center
  const earth = createEarth();
  scene.add(earth);

  // Polaris (clickable north star)
  const polarisGroup = createPolaris();
  scene.add(polarisGroup);

  return {
    scene,
    eclipticGroup,
    zodiacBelt,
    constellationGroup,
    planetVisuals,
    houseVisuals,
    highlightSystem,
    earth,
    polarisGroup,
    ascGroup: houseVisuals.ascGroup,
  };
}
