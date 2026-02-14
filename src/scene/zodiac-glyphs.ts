import * as THREE from 'three';

const TUBE_RADIUS = 0.1;
const TUBE_SEGMENTS = 40;
const RADIAL_SEGMENTS = 12;

type PathDef = THREE.Vector3[];

/** Create a tube mesh from a set of points */
function tubeFromPoints(points: PathDef, color: number): THREE.Mesh {
  const curve = new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5);
  const geom = new THREE.TubeGeometry(curve, TUBE_SEGMENTS, TUBE_RADIUS, RADIAL_SEGMENTS, false);
  const mat = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.9,
  });
  return new THREE.Mesh(geom, mat);
}

/** Helper: arc from startAngle to endAngle at given center and radius */
function arcPoints(cx: number, cy: number, r: number, startDeg: number, endDeg: number, steps = 16): PathDef {
  const pts: PathDef = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const angle = (startDeg + (endDeg - startDeg) * t) * Math.PI / 180;
    pts.push(new THREE.Vector3(cx + r * Math.cos(angle), cy + r * Math.sin(angle), 0));
  }
  return pts;
}

// ─── ARIES ♈ ── Two curved ram horns ──────────────────────────────────
function createAries(color: number): THREE.Group {
  const g = new THREE.Group();
  // Left horn — curve from bottom-center up and curling left
  g.add(tubeFromPoints([
    new THREE.Vector3(0, -0.8, 0),
    new THREE.Vector3(-0.15, -0.3, 0),
    new THREE.Vector3(-0.5, 0.4, 0),
    new THREE.Vector3(-0.7, 0.8, 0),
    new THREE.Vector3(-0.5, 0.9, 0),
    new THREE.Vector3(-0.3, 0.6, 0),
  ], color));
  // Right horn
  g.add(tubeFromPoints([
    new THREE.Vector3(0, -0.8, 0),
    new THREE.Vector3(0.15, -0.3, 0),
    new THREE.Vector3(0.5, 0.4, 0),
    new THREE.Vector3(0.7, 0.8, 0),
    new THREE.Vector3(0.5, 0.9, 0),
    new THREE.Vector3(0.3, 0.6, 0),
  ], color));
  return g;
}

// ─── TAURUS ♉ ── Circle with horns ───────────────────────────────────
function createTaurus(color: number): THREE.Group {
  const g = new THREE.Group();
  // Circle at bottom
  g.add(tubeFromPoints(arcPoints(0, -0.35, 0.45, 0, 360), color));
  // Left horn
  g.add(tubeFromPoints([
    new THREE.Vector3(-0.3, 0.1, 0),
    new THREE.Vector3(-0.5, 0.5, 0),
    new THREE.Vector3(-0.7, 0.8, 0),
    new THREE.Vector3(-0.6, 0.95, 0),
  ], color));
  // Right horn
  g.add(tubeFromPoints([
    new THREE.Vector3(0.3, 0.1, 0),
    new THREE.Vector3(0.5, 0.5, 0),
    new THREE.Vector3(0.7, 0.8, 0),
    new THREE.Vector3(0.6, 0.95, 0),
  ], color));
  return g;
}

// ─── GEMINI ♊ ── Two pillars with bars ────────────────────────────────
function createGemini(color: number): THREE.Group {
  const g = new THREE.Group();
  // Left pillar
  g.add(tubeFromPoints([
    new THREE.Vector3(-0.3, -0.8, 0),
    new THREE.Vector3(-0.3, 0.8, 0),
  ], color));
  // Right pillar
  g.add(tubeFromPoints([
    new THREE.Vector3(0.3, -0.8, 0),
    new THREE.Vector3(0.3, 0.8, 0),
  ], color));
  // Top bar (arc)
  g.add(tubeFromPoints(arcPoints(0, 0.8, 0.35, 160, 20, 12), color));
  // Bottom bar (arc)
  g.add(tubeFromPoints(arcPoints(0, -0.8, 0.35, 200, 340, 12), color));
  return g;
}

// ─── CANCER ♋ ── Two interlocking arcs (69-like) ─────────────────────
function createCancer(color: number): THREE.Group {
  const g = new THREE.Group();
  // Top arc with inward curl
  g.add(tubeFromPoints([
    ...arcPoints(0, 0.25, 0.5, 180, 0),
    ...arcPoints(0.5, 0.55, 0.18, -10, 250, 10),
  ], color));
  // Bottom arc with inward curl
  g.add(tubeFromPoints([
    ...arcPoints(0, -0.25, 0.5, 0, -180),
    ...arcPoints(-0.5, -0.55, 0.18, 170, 430, 10),
  ], color));
  return g;
}

// ─── LEO ♌ ── Circle with swooping tail ──────────────────────────────
function createLeo(color: number): THREE.Group {
  const g = new THREE.Group();
  // Main loop
  g.add(tubeFromPoints(arcPoints(-0.2, -0.1, 0.4, -30, 330), color));
  // Swooping tail from loop up and to the right
  g.add(tubeFromPoints([
    new THREE.Vector3(0.15, -0.25, 0),
    new THREE.Vector3(0.4, 0.0, 0),
    new THREE.Vector3(0.6, 0.4, 0),
    new THREE.Vector3(0.5, 0.7, 0),
    new THREE.Vector3(0.3, 0.85, 0),
    new THREE.Vector3(0.15, 0.7, 0),
    new THREE.Vector3(0.25, 0.5, 0),
  ], color));
  return g;
}

// ─── VIRGO ♍ ── M-shape with descending loop ─────────────────────────
function createVirgo(color: number): THREE.Group {
  const g = new THREE.Group();
  // M strokes
  g.add(tubeFromPoints([
    new THREE.Vector3(-0.6, -0.8, 0),
    new THREE.Vector3(-0.6, 0.3, 0),
    new THREE.Vector3(-0.55, 0.6, 0),
    new THREE.Vector3(-0.35, 0.3, 0),
    new THREE.Vector3(-0.2, 0.0, 0),
    new THREE.Vector3(-0.05, 0.3, 0),
    new THREE.Vector3(0.1, 0.6, 0),
    new THREE.Vector3(0.2, 0.3, 0),
    new THREE.Vector3(0.3, 0.0, 0),
    new THREE.Vector3(0.4, 0.3, 0),
    new THREE.Vector3(0.5, 0.6, 0),
    new THREE.Vector3(0.5, 0.2, 0),
  ], color));
  // Descending loop/tail
  g.add(tubeFromPoints([
    new THREE.Vector3(0.5, 0.2, 0),
    new THREE.Vector3(0.55, -0.2, 0),
    new THREE.Vector3(0.7, -0.6, 0),
    new THREE.Vector3(0.85, -0.8, 0),
    new THREE.Vector3(0.7, -0.9, 0),
    new THREE.Vector3(0.55, -0.7, 0),
  ], color));
  return g;
}

// ─── LIBRA ♎ ── Horizontal line with balance arc ─────────────────────
function createLibra(color: number): THREE.Group {
  const g = new THREE.Group();
  // Bottom horizontal line
  g.add(tubeFromPoints([
    new THREE.Vector3(-0.7, -0.6, 0),
    new THREE.Vector3(0.7, -0.6, 0),
  ], color));
  // Middle horizontal line
  g.add(tubeFromPoints([
    new THREE.Vector3(-0.7, -0.15, 0),
    new THREE.Vector3(0.7, -0.15, 0),
  ], color));
  // Balance arc above
  g.add(tubeFromPoints(arcPoints(0, -0.15, 0.55, 10, 170), color));
  return g;
}

// ─── SCORPIO ♏ ── M-shape with arrow tail ─────────────────────────────
function createScorpio(color: number): THREE.Group {
  const g = new THREE.Group();
  // M strokes (similar to Virgo but with arrow)
  g.add(tubeFromPoints([
    new THREE.Vector3(-0.6, -0.6, 0),
    new THREE.Vector3(-0.6, 0.3, 0),
    new THREE.Vector3(-0.55, 0.6, 0),
    new THREE.Vector3(-0.35, 0.3, 0),
    new THREE.Vector3(-0.2, 0.0, 0),
    new THREE.Vector3(-0.05, 0.3, 0),
    new THREE.Vector3(0.1, 0.6, 0),
    new THREE.Vector3(0.2, 0.3, 0),
    new THREE.Vector3(0.3, 0.0, 0),
    new THREE.Vector3(0.4, 0.3, 0),
    new THREE.Vector3(0.5, 0.6, 0),
    new THREE.Vector3(0.5, 0.0, 0),
    new THREE.Vector3(0.5, -0.4, 0),
    new THREE.Vector3(0.55, -0.6, 0),
    new THREE.Vector3(0.7, -0.5, 0),
  ], color));
  // Arrow tip
  g.add(tubeFromPoints([
    new THREE.Vector3(0.55, -0.35, 0),
    new THREE.Vector3(0.8, -0.55, 0),
  ], color));
  g.add(tubeFromPoints([
    new THREE.Vector3(0.65, -0.7, 0),
    new THREE.Vector3(0.8, -0.55, 0),
  ], color));
  return g;
}

// ─── SAGITTARIUS ♐ ── Diagonal arrow ─────────────────────────────────
function createSagittarius(color: number): THREE.Group {
  const g = new THREE.Group();
  // Main diagonal arrow shaft
  g.add(tubeFromPoints([
    new THREE.Vector3(-0.6, -0.7, 0),
    new THREE.Vector3(0.6, 0.7, 0),
  ], color));
  // Arrowhead
  g.add(tubeFromPoints([
    new THREE.Vector3(0.25, 0.7, 0),
    new THREE.Vector3(0.6, 0.7, 0),
    new THREE.Vector3(0.6, 0.35, 0),
  ], color));
  // Cross bar
  g.add(tubeFromPoints([
    new THREE.Vector3(-0.1, 0.3, 0),
    new THREE.Vector3(0.35, -0.15, 0),
  ], color));
  return g;
}

// ─── CAPRICORN ♑ ── V-shape with loop tail ────────────────────────────
function createCapricorn(color: number): THREE.Group {
  const g = new THREE.Group();
  // Main V curve going into a loop
  g.add(tubeFromPoints([
    new THREE.Vector3(-0.5, 0.7, 0),
    new THREE.Vector3(-0.4, 0.4, 0),
    new THREE.Vector3(-0.2, -0.2, 0),
    new THREE.Vector3(0.0, -0.6, 0),
    new THREE.Vector3(0.2, -0.2, 0),
    new THREE.Vector3(0.3, 0.2, 0),
    new THREE.Vector3(0.35, 0.5, 0),
    new THREE.Vector3(0.4, 0.2, 0),
    new THREE.Vector3(0.5, -0.2, 0),
    new THREE.Vector3(0.6, -0.5, 0),
    new THREE.Vector3(0.7, -0.7, 0),
  ], color));
  // Loop at bottom right
  g.add(tubeFromPoints(arcPoints(0.55, -0.7, 0.2, 30, 360, 12), color));
  return g;
}

// ─── AQUARIUS ♒ ── Two wavy parallel lines ────────────────────────────
function createAquarius(color: number): THREE.Group {
  const g = new THREE.Group();
  const wave = (yOff: number): PathDef => {
    const pts: PathDef = [];
    for (let i = 0; i <= 24; i++) {
      const t = i / 24;
      const x = -0.7 + t * 1.4;
      const y = yOff + Math.sin(t * Math.PI * 3) * 0.15;
      pts.push(new THREE.Vector3(x, y, 0));
    }
    return pts;
  };
  g.add(tubeFromPoints(wave(0.2), color));
  g.add(tubeFromPoints(wave(-0.2), color));
  return g;
}

// ─── PISCES ♓ ── Two arcs with horizontal line ───────────────────────
function createPisces(color: number): THREE.Group {
  const g = new THREE.Group();
  // Left arc (opening right)
  g.add(tubeFromPoints(arcPoints(-0.45, 0, 0.6, 130, 230), color));
  // Right arc (opening left)
  g.add(tubeFromPoints(arcPoints(0.45, 0, 0.6, -50, 50), color));
  // Horizontal connecting bar
  g.add(tubeFromPoints([
    new THREE.Vector3(-0.7, 0, 0),
    new THREE.Vector3(0.7, 0, 0),
  ], color));
  return g;
}

// ─── PUBLIC API ───────────────────────────────────────────────────────

const CREATORS: Record<string, (color: number) => THREE.Group> = {
  Aries: createAries,
  Taurus: createTaurus,
  Gemini: createGemini,
  Cancer: createCancer,
  Leo: createLeo,
  Virgo: createVirgo,
  Libra: createLibra,
  Scorpio: createScorpio,
  Sagittarius: createSagittarius,
  Capricorn: createCapricorn,
  Aquarius: createAquarius,
  Pisces: createPisces,
};

/** Create a 3D glyph for a zodiac sign. Returns a Group scaled to ~2 units. */
export function createSignGlyph(signName: string, color: number): THREE.Group {
  const creator = CREATORS[signName];
  if (!creator) {
    // Fallback: empty group
    return new THREE.Group();
  }
  const glyph = creator(color);
  glyph.scale.set(3.0, 3.0, 3.0);
  return glyph;
}
