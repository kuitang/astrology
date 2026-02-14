import * as THREE from 'three';
import { getDevicePixelRatio } from '../utils/responsive.js';

export function createRenderer(container: HTMLElement): THREE.WebGLRenderer {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance',
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(getDevicePixelRatio());
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  container.appendChild(renderer.domElement);

  const onResize = () => {
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(getDevicePixelRatio());
  };
  window.addEventListener('resize', onResize);

  // WebGL context loss/restore handling
  renderer.domElement.addEventListener('webglcontextlost', (e) => {
    e.preventDefault();
    console.warn('WebGL context lost — will restore when available');
  });

  renderer.domElement.addEventListener('webglcontextrestored', () => {
    console.log('WebGL context restored');
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(getDevicePixelRatio());
  });

  return renderer;
}
