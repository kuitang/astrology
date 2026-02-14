# 3D Astrology Orrery

An interactive 3D geocentric orrery showing the celestial sphere from Earth's perspective. Explore planets, zodiac signs, and real constellation positions with Western tropical astrology data.

**Live demo**: https://kuitang.github.io/astrology/

## Features

- **3D Geocentric View**: Earth at center with the celestial sphere around it
- **Real Planet Positions**: Calculated by [astronomy-engine](https://github.com/cosinekitty/astronomy) (arcsecond precision)
- **Zodiac Belt**: 12 sign divisions with element-colored glyphs
- **Real Constellations**: Stick figures from Stellarium at actual ecliptic positions, showing the ~24° precession offset from tropical signs
- **Distance-Ordered Constellations**: Displayed at varying radii based on real stellar distances from HYG catalog
- **5,071 Real Stars**: Background starfield from the HYG Star Catalog (magnitude < 6.0)
- **Interactive Selection**: Tap planets or signs to see positions, dignities, and transit dates
- **Educational Constellation Info**: Click any constellation to see its real ecliptic extent vs. conventional astrological sign
- **City Search**: 33,258 cities from GeoNames with timezone auto-detection
- **Natal Charts**: Whole Sign house system from any date/time/location
- **Time Animation**: Scrub through time to watch planets move
- **Mobile-Responsive**: Touch-optimized with orbit controls and pinch zoom

## Data Sources

All astronomical data comes from validated, public-domain sources:

| Data | Source | URL | Notes |
|------|--------|-----|-------|
| Planet positions | astronomy-engine | https://github.com/cosinekitty/astronomy | Pure JS, no WASM, public domain |
| Constellation lines | Stellarium `constellationship.fab` | https://github.com/Stellarium/stellarium/tree/master/skycultures/modern | Public domain |
| Star positions & distances | HYG Star Catalog v4.1 | https://github.com/astronexus/HYG-Database | CC BY-SA 2.5 |
| City data | GeoNames cities15000 | https://download.geonames.org/export/dump/cities15000.zip | CC BY 4.0 |
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
# Install dependencies
npm install

# Start dev server
npm run dev

# Run unit tests
npm test

# Run Playwright E2E tests
npm run test:e2e

# Type check
npx tsc --noEmit

# Build for production
npm run build
```

## Deployment

The app deploys to GitHub Pages automatically on push to `main` via GitHub Actions (`.github/workflows/deploy.yml`).

Manual deploy:
```bash
npm run build
# dist/ contains the static site
```

## Architecture

### Tech Stack

- **TypeScript** (strict mode)
- **Vite 7** (bundler)
- **Three.js r182** (3D rendering)
- **astronomy-engine** (ephemeris calculations, pure JS)
- **flatpickr** (date/time picker)

### Design Choices

**Geocentric ecliptic coordinates**: All celestial objects are positioned in ecliptic longitude/latitude within a Three.js group tilted by Earth's obliquity (23.4°). This means the zodiac belt, planets, and constellations all inherit the correct tilt automatically.

**Signs vs. Constellations**: Western tropical astrology fixes the 12 signs to seasons (0° Aries = March equinox), while the real constellations drift ~1° every 72 years due to precession. The orrery shows both simultaneously — sign divisions as the astrological framework, constellation figures at their real positions — making the ~24° offset always visible. No mode toggle needed.

**Distance-ordered constellations**: Each constellation renders at a different radius computed from the median distance of its stars (log scale, 24-34 scene units). Nearby constellations like Ophiuchus (91 ly) appear closer to Earth; distant ones like Scorpius (491 ly) appear farther.

**No backend**: Everything runs in the browser. astronomy-engine is pure JavaScript (~150KB), not WASM. Planet positions are available synchronously on first render. City data (2.8 MB) loads on demand at first search.

**Transit search**: Uses bisection root-finding on ecliptic longitude. Coarse scan by day, then 50 iterations to ~1-second precision. Handles retrograde crossings and 360°/0° wraparound.

## License

MIT
