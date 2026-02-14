import * as THREE from 'three';

export function createEarth(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'earthGroup';

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
  group.add(earth);

  // Try to load texture (gracefully degrade if not found)
  const loader = new THREE.TextureLoader();
  loader.load(
    import.meta.env.BASE_URL + 'textures/earth-day.jpg',
    (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      material.map = texture;
      material.color.set(0xffffff);
      material.needsUpdate = true;
    },
    undefined,
    () => {
      // Texture not found — keep procedural look
    }
  );

  // North-south axis line
  const axisGeom = new THREE.BufferGeometry();
  const axisLen = 6;
  axisGeom.setAttribute('position', new THREE.Float32BufferAttribute([
    0, -axisLen, 0,
    0, axisLen, 0,
  ], 3));
  const axisMat = new THREE.LineBasicMaterial({
    color: 0x88aacc,
    transparent: true,
    opacity: 0.3,
  });
  const axisLine = new THREE.Line(axisGeom, axisMat);
  axisLine.name = 'axis-line';
  group.add(axisLine);

  // North pole marker (small bright sphere)
  const npGeom = new THREE.SphereGeometry(0.2, 8, 8);
  const npMat = new THREE.MeshBasicMaterial({ color: 0x88ccff });
  const northPole = new THREE.Mesh(npGeom, npMat);
  northPole.position.set(0, 2.7, 0);
  northPole.name = 'north-pole';
  group.add(northPole);

  // "N" label above north pole
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  ctx.font = 'bold 40px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.strokeStyle = 'rgba(0,0,0,0.8)';
  ctx.lineWidth = 3;
  ctx.strokeText('N', 32, 32);
  ctx.fillStyle = '#88ccff';
  ctx.fillText('N', 32, 32);
  const labelTexture = new THREE.CanvasTexture(canvas);
  const spriteMat = new THREE.SpriteMaterial({ map: labelTexture, transparent: true });
  const nLabel = new THREE.Sprite(spriteMat);
  nLabel.position.set(0, 4, 0);
  nLabel.scale.set(1.5, 1.5, 1);
  group.add(nLabel);

  // Rotation arrow — counterclockwise when viewed from north pole (Earth rotates west→east)
  const arrowY = 3.2;
  const arrowR = 1.5;
  const arcDegrees = 300;
  const arcSegments = 48;
  const arcPoints: THREE.Vector3[] = [];
  for (let i = 0; i <= arcSegments; i++) {
    const t = i / arcSegments;
    const angle = t * (arcDegrees * Math.PI / 180);
    // Counterclockwise from above: x=R*cos(θ), z=-R*sin(θ)
    arcPoints.push(new THREE.Vector3(
      arrowR * Math.cos(angle),
      arrowY,
      -arrowR * Math.sin(angle)
    ));
  }
  const arcGeom = new THREE.BufferGeometry().setFromPoints(arcPoints);
  const arcMat = new THREE.LineBasicMaterial({
    color: 0x88ccff,
    transparent: true,
    opacity: 0.4,
  });
  const rotArc = new THREE.Line(arcGeom, arcMat);
  rotArc.name = 'rotation-arrow-arc';
  group.add(rotArc);

  // Arrowhead cone at end of arc
  const lastPt = arcPoints[arcPoints.length - 1]!;
  const prevPt = arcPoints[arcPoints.length - 2]!;
  const arrowDir = new THREE.Vector3().subVectors(lastPt, prevPt).normalize();
  const coneGeom = new THREE.ConeGeometry(0.15, 0.4, 6);
  const coneMat = new THREE.MeshBasicMaterial({ color: 0x88ccff, transparent: true, opacity: 0.5 });
  const cone = new THREE.Mesh(coneGeom, coneMat);
  cone.position.copy(lastPt);
  cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), arrowDir);
  cone.name = 'rotation-arrowhead';
  group.add(cone);

  return group;
}

/**
 * Create Polaris as a prominent clickable star near the north celestial pole.
 * Polaris: RA 2h 31m 49s (~37.95°), Dec +89° 15' 51" (~89.26°)
 */
export function createPolaris(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'polarisGroup';

  const FAR_RADIUS = 200;
  const raRad = (2 + 31/60 + 49/3600) * (Math.PI / 12);
  const decRad = (89 + 15/60 + 51/3600) * (Math.PI / 180);
  const x = FAR_RADIUS * Math.cos(decRad) * Math.cos(raRad);
  const y = FAR_RADIUS * Math.sin(decRad);
  const z = -FAR_RADIUS * Math.cos(decRad) * Math.sin(raRad);

  // Bright star sprite
  const canvas = document.createElement('canvas');
  const size = 64;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const gradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
  gradient.addColorStop(0, 'rgba(255, 255, 240, 1.0)');
  gradient.addColorStop(0.2, 'rgba(255, 255, 220, 0.8)');
  gradient.addColorStop(0.5, 'rgba(200, 200, 255, 0.3)');
  gradient.addColorStop(1, 'rgba(200, 200, 255, 0)');
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2);
  ctx.fill();
  const starTexture = new THREE.CanvasTexture(canvas);

  const spriteMat = new THREE.SpriteMaterial({
    map: starTexture,
    transparent: true,
    color: 0xffffee,
  });
  const sprite = new THREE.Sprite(spriteMat);
  sprite.position.set(x, y, z);
  sprite.scale.set(8, 8, 1);
  group.add(sprite);

  // "Polaris" label
  const labelCanvas = document.createElement('canvas');
  labelCanvas.width = 256;
  labelCanvas.height = 64;
  const lctx = labelCanvas.getContext('2d')!;
  lctx.font = 'bold 36px sans-serif';
  lctx.textAlign = 'center';
  lctx.textBaseline = 'middle';
  lctx.strokeStyle = 'rgba(0,0,0,0.8)';
  lctx.lineWidth = 3;
  lctx.strokeText('Polaris', 128, 32);
  lctx.fillStyle = '#ffffcc';
  lctx.fillText('Polaris', 128, 32);
  const labelTexture = new THREE.CanvasTexture(labelCanvas);
  const labelSpriteMat = new THREE.SpriteMaterial({ map: labelTexture, transparent: true });
  const labelSprite = new THREE.Sprite(labelSpriteMat);
  labelSprite.position.set(x + 3, y + 5, z);
  labelSprite.scale.set(12, 3, 1);
  group.add(labelSprite);

  // Clickable hit sphere at Polaris
  const hitGeom = new THREE.SphereGeometry(8, 8, 8);
  const hitMat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false });
  const hitMesh = new THREE.Mesh(hitGeom, hitMat);
  hitMesh.position.set(x, y, z);
  hitMesh.name = 'polaris-hit';
  hitMesh.userData = { type: 'polaris' };
  group.add(hitMesh);

  // Solid line extending the Earth axis from north pole tip to Polaris
  // (matches the south-pole axis line in createEarth — same color/style, continuous)
  const AXIS_TIP_Y = 6; // matches axisLen in createEarth()
  const axisLineGeom = new THREE.BufferGeometry();
  axisLineGeom.setAttribute('position', new THREE.Float32BufferAttribute([
    0, AXIS_TIP_Y, 0,
    x, y, z,
  ], 3));
  const axisLineMat = new THREE.LineBasicMaterial({
    color: 0x88aacc,
    transparent: true,
    opacity: 0.3,
  });
  const axisLine = new THREE.Line(axisLineGeom, axisLineMat);
  axisLine.name = 'polaris-axis-line';
  group.add(axisLine);

  // Clickable hit cylinder along the axis line (generous touch target)
  const lineDir = new THREE.Vector3(x, y - AXIS_TIP_Y, z);
  const lineLen = lineDir.length();
  lineDir.normalize();
  const midX = x / 2;
  const midY = (AXIS_TIP_Y + y) / 2;
  const midZ = z / 2;
  const hitCylGeom = new THREE.CylinderGeometry(4, 4, lineLen, 6);
  const hitCylMat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false });
  const hitCyl = new THREE.Mesh(hitCylGeom, hitCylMat);
  hitCyl.position.set(midX, midY, midZ);
  hitCyl.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), lineDir);
  hitCyl.name = 'polaris-line-hit';
  hitCyl.userData = { type: 'polaris' };
  group.add(hitCyl);

  return group;
}
