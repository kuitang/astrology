# 3D Astrology Orrery

An interactive 3D geocentric orrery showing the celestial sphere from Earth's perspective. Explore planets, zodiac signs, constellations, transits, dignities, and natal charts with Western tropical astrology data.

**Live**: https://astrology3d.app

## Features

- **3D Geocentric View**: Earth at center with the celestial sphere around it
- **Real Planet Positions**: Calculated by [astronomy-engine](https://github.com/cosinekitty/astronomy) (arcsecond precision)
- **NASA Planet Textures**: Real imagery for all 10 celestial bodies including Earth (Blue Marble)
- **Zodiac Belt**: 12 sign divisions with element-colored 3D glyphs and translucent boundary planes
- **Real Constellations**: Stick figures from Stellarium at actual ecliptic positions, showing the ~24° precession offset
- **Distance-Ordered Constellations**: Rendered at varying radii based on real stellar distances from HYG catalog
- **5,071 Real Stars**: Background starfield from the HYG Star Catalog (magnitude < 6.0)
- **Interactive Selection**: Tap planets, signs, constellations, or Polaris for detailed info
- **Transit Dates**: Bisection search finds exact sign ingress/egress dates for any planet at any date
- **Dignity System**: Domicile, exaltation, detriment, fall, and peregrine status for each planet
- **Dual Interpretations**: Toggle between Traditional (Hellenistic) and Modern psychological interpretations
- **Rising Sign**: Ascendant calculation with interpretation when birth location is set
- **City Search**: 33,258 cities from GeoNames with timezone auto-detection
- **Natal Charts**: Whole Sign house system from any date/time/location
- **Time Animation**: Scrub through ±1 year, or auto-update every second in transit mode
- **Polaris & Celestial Pole**: North Star marker with axis line and Great Year info
- **Mobile-Responsive**: Touch-optimized with orbit controls and pinch zoom
- **PWA Ready**: Installable with manifest.json, favicon, and icons

## Interpretations

Each planet-in-sign combination includes two styles of interpretation:

- **Traditional**: Hellenistic/classical astrology. Emphasizes sect, domicile rulership, essential dignity, and the planet's capacity to fulfill its significations. Third-person descriptive style.
- **Modern**: Psychological/evolutionary astrology. Focuses on growth themes, inner dynamics, and developmental potential. Third-person descriptive style.

Interpretations cover:
- All 10 planets × 12 signs (transit context)
- All 10 planets × 12 signs (natal context)
- All 12 Rising signs (Ascendant)

## Data Sources

All astronomical data comes from validated, public-domain sources:

| Data | Source | URL | Notes |
|------|--------|-----|-------|
| Planet positions | astronomy-engine | https://github.com/cosinekitty/astronomy | Pure JS, no WASM, public domain |
| Constellation lines | Stellarium `constellationship.fab` | https://github.com/Stellarium/stellarium/tree/master/skycultures/modern | Public domain |
| Star positions & distances | HYG Star Catalog v4.1 | https://github.com/astronexus/HYG-Database | CC BY-SA 2.5 |
| City data | GeoNames cities15000 | https://download.geonames.org/export/dump/cities15000.zip | CC BY 4.0 |
| Planet textures | NASA/JPL | Various NASA image galleries | Public domain |
| Earth texture | NASA Blue Marble | https://visibleearth.nasa.gov | Public domain |
| Dignity tables | Traditional Western astrology | n/a | Domicile, exaltation, detriment, fall |

### Data Pipeline

Constellation data is generated from source catalogs, not hand-coded:

```bash
# Regenerate constellation data from Stellarium + HYG
python3 scripts/generate-constellations.py
```

This script:
1. Parses Stellarium's `constellationship.fab` for star-to-star connection pairs (Hipparcos IDs)
2. Looks up each star's RA/Dec/distance in the HYG catalog (`hygdata_v41.csv`)
3. Converts equatorial coordinates (RA/Dec) to ecliptic coordinates (longitude/latitude)
4. Computes median stellar distance per constellation (robust to catalog outliers)
5. Outputs `src/scene/constellation-data.generated.ts`

Starfield data (`public/data/stars-hyg.json`) is also generated from HYG: 5,071 stars brighter than magnitude 6.0 with real positions and color temperatures.

## Local Development

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:5173)
npm test             # Run unit tests (Vitest)
npm run test:e2e     # Run Playwright E2E tests
npx tsc --noEmit     # Type check
npm run build        # Build for production → dist/
```

### Preview Production Build

```bash
npm run build
python3 -m http.server 8080 -d dist
# Open http://localhost:8080
```

## Testing

- **Unit tests** (Vitest): 40 tests covering ephemeris calculations, transit search, dignity lookup, and interpretations
- **E2E tests** (Playwright): 92 tests across desktop (1280×720) and mobile (393×851) viewports covering rendering, interaction, natal chart correctness, houses, transits, and UI

The natal correctness suite (`tests/natal-correctness.spec.ts`) verifies that natal charts compute positions and transits for the birth date (not today), and that the auto-update timer doesn't overwrite natal data.

## Deployment

Deployed to GitHub Pages with custom domain `astrology3d.app`. Pushes to `main` trigger automatic deployment via GitHub Actions.

The build is a fully static site — no backend, no server-side rendering. The GitHub Actions workflow (`.github/workflows/deploy.yml`) runs `npm ci && npm run build` and deploys the `dist/` directory to GitHub Pages.

### DNS Configuration (for astrology3d.app)

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | kuitang.github.io |

## Architecture

### Tech Stack

- **TypeScript** (strict mode) — 42 source files
- **Vite 7** (bundler, dev server, HMR)
- **Three.js r182** (3D rendering, WebGL)
- **astronomy-engine** (ephemeris calculations, pure JS)
- **flatpickr** (date/time picker)

### Source Layout

```
src/
├── app.ts                  # Main app orchestrator
├── main.ts                 # Entry point
├── state/store.ts          # Reactive pub/sub store
├── ephemeris/              # Astronomy calculations
│   ├── planets.ts          # Planet position computation
│   ├── transits.ts         # Bisection transit search
│   ├── houses.ts           # Whole Sign house system
│   └── dignity.ts          # Essential dignity lookup
├── scene/                  # Three.js rendering
│   ├── scene-graph.ts      # Scene assembly
│   ├── planets.ts          # Planet meshes + textures
│   ├── zodiac-belt.ts      # 12-sign belt
│   ├── zodiac-glyphs.ts    # 3D sign glyphs
│   ├── constellations.ts   # Constellation stick figures
│   ├── starfield.ts        # 5,071 background stars
│   ├── earth.ts            # Earth globe
│   └── houses.ts           # House line rendering
├── ui/                     # DOM overlay UI
│   ├── info-panel.ts       # Selection details + interpretations
│   ├── datetime-picker.ts  # flatpickr wrapper
│   ├── city-search.ts      # City autocomplete (33k cities)
│   └── time-scrubber.ts    # ±1 year slider
└── data/                   # Static data tables
    ├── interpretations.ts  # Style router (trad/mod)
    ├── interpretations-trad.ts  # Hellenistic interpretations
    └── interpretations-mod.ts   # Modern interpretations
```

### Design Choices

**Geocentric ecliptic coordinates**: All celestial objects are positioned in ecliptic longitude/latitude within a Three.js group tilted by Earth's obliquity (23.4°). The zodiac belt, planets, and constellations all inherit the correct tilt automatically.

**Signs vs. Constellations**: Western tropical astrology fixes the 12 signs to seasons (0° Aries = March equinox), while the real constellations drift ~1° every 72 years due to precession. The orrery shows both simultaneously — sign divisions as the astrological framework, constellation figures at their real positions — making the ~24° offset always visible.

**Distance-ordered constellations**: Each constellation renders at a different radius computed from the median distance of its stars (log scale, 24-34 scene units). Nearby constellations like Ophiuchus (91 ly) appear closer; distant ones like Scorpius (491 ly) appear farther.

**No backend**: Everything runs in the browser. astronomy-engine is pure JavaScript (~150KB), not WASM. Planet positions are available synchronously on first render. City data (2.8 MB) loads on demand at first search.

**Transit search**: Adaptive bisection root-finding on ecliptic longitude. Step size and search window scale with planet speed (1 day for Sun, 90 days for Pluto). Handles retrograde crossings, 360°/0° wraparound, and spans up to 35 years for Pluto's long transits.

**Live mode vs. manual mode**: A `liveMode` flag prevents the 1-second auto-update timer from overwriting user-selected dates. Setting any date manually disables live updates; the "Now" button re-enables them.

## License

AGPL-3.0 — see [LICENSE](LICENSE)
