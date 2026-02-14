import * as THREE from 'three';
import { getDevicePixelRatio } from '../utils/responsive.js';

/**
 * Create the WebGL renderer inside a wrapper div that participates in flex layout.
 * On mobile, the wrapper is flex:1 so it shrinks when the info panel is visible.
 */
export function createRenderer(container: HTMLElement): THREE.WebGLRenderer {
  // Canvas wrapper — flex child that shrinks when info panel appears
  const wrapper = document.createElement('div');
  wrapper.id = 'canvas-wrapper';
  wrapper.style.cssText = 'flex:1; min-height:0; overflow:hidden; position:relative; width:100%; height:100%;';
  container.appendChild(wrapper);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance',
  });
  renderer.setSize(wrapper.clientWidth, wrapper.clientHeight);
  renderer.setPixelRatio(getDevicePixelRatio());
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.domElement.style.touchAction = 'none';
  wrapper.appendChild(renderer.domElement);

  const onResize = () => {
    renderer.setSize(wrapper.clientWidth, wrapper.clientHeight);
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
    renderer.setSize(wrapper.clientWidth, wrapper.clientHeight);
    renderer.setPixelRatio(getDevicePixelRatio());
  });

  return renderer;
}
