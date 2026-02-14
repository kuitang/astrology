import * as THREE from 'three';

export function createEarth(): THREE.Mesh {
  const geometry = new THREE.SphereGeometry(2.5, 64, 64);
  const material = new THREE.MeshStandardMaterial({
    color: 0x2244aa,
    roughness: 0.8,
    metalness: 0.1,
    emissive: 0x112233,
    emissiveIntensity: 0.3,
  });
  const earth = new THREE.Mesh(geometry, material);
  earth.name = 'earth';

  // Try to load texture (gracefully degrade if not found)
  const loader = new THREE.TextureLoader();
  loader.load(
    import.meta.env.BASE_URL + 'textures/earth-day.jpg',
    (texture) => {
      material.map = texture;
      material.color.set(0xffffff);
      material.needsUpdate = true;
    },
    undefined,
    () => {
      // Texture not found — keep procedural look
    }
  );

  return earth;
}
