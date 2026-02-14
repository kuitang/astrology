import type { AppState, SelectedObject } from '../types/astro.js';
import { ZODIAC_SIGNS } from '../data/zodiac-signs.js';
import { PLANET_MAP } from '../data/planet-metadata.js';
import { getDignity, DIGNITY_LABELS, DIGNITY_COLORS } from '../data/dignities.js';
import { ZODIAC_CONSTELLATIONS } from '../scene/constellations.js';
import { getInterpretation, getRisingInterpretation, PLANETARY_PERIODS } from '../data/interpretations.js';
import { formatDegrees } from '../utils/math.js';

export function createInfoPanel(): HTMLElement {
  const panel = document.createElement('div');
  panel.id = 'info-panel';
  panel.dataset.testid = 'info-panel';
  // All styling handled by CSS in index.html with @media queries
  return panel;
}

export function updateInfoPanel(panel: HTMLElement, state: AppState): void {
  const selected = state.selectedObject;
  if (!selected) {
    panel.style.display = 'none';
    return;
  }

  panel.style.display = 'block';

  if (selected.type === 'planet') {
    renderPlanetInfo(panel, selected, state);
  } else if (selected.type === 'sign') {
    renderSignInfo(panel, selected, state);
  } else if (selected.type === 'constellation') {
    renderConstellationInfo(panel, selected);
  } else if (selected.type === 'rising') {
    renderRisingInfo(panel, state);
  } else if (selected.type === 'polaris') {
    renderPolarisInfo(panel);
  }
}

function renderPlanetInfo(panel: HTMLElement, selected: SelectedObject, state: AppState): void {
  const pos = state.planetPositions.get(selected.id as never);
  if (!pos) return;
  const meta = PLANET_MAP.get(selected.id as never);
  if (!meta) return;
  const sign = ZODIAC_SIGNS[pos.signIndex];
  if (!sign) return;
  const dignity = getDignity(pos.id, pos.signIndex);
  const dignityColor = DIGNITY_COLORS[dignity];
  const interp = getInterpretation(meta.name, sign.name);
  const period = PLANETARY_PERIODS[meta.name];

  panel.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
      <span style="font-size:28px;color:#${meta.color.toString(16).padStart(6, '0')}">${meta.glyph}</span>
      <span style="font-size:20px;font-weight:bold">${meta.name}</span>
    </div>
    <div style="margin-bottom:8px;">
      <span style="color:#aaa">Position:</span>
      <strong>${formatDegrees(pos.longitude)}</strong> ecliptic
    </div>
    <div style="margin-bottom:8px;">
      <span style="color:#aaa">Sign:</span>
      ${sign.glyph} <strong>${sign.name}</strong> ${formatDegrees(pos.signDegree)}
    </div>
    <div style="margin-bottom:8px;">
      <span style="color:#aaa">Speed:</span>
      ${pos.speed > 0 ? '→' : '←'} ${Math.abs(pos.speed).toFixed(1)}°/day
      ${pos.speed < 0 ? '<span style="color:#ff4444"> (Retrograde)</span>' : ''}
    </div>
    <div style="margin-bottom:8px;">
      <span style="color:#aaa">Dignity:</span>
      <span style="color:${dignityColor};font-weight:bold">${DIGNITY_LABELS[dignity]}</span>
    </div>
    ${state.currentTransit ? `
    <div style="margin-bottom:8px;">
      <span style="color:#aaa">Transit:</span>
      <span style="font-size:13px;">${formatTransitDate(state.currentTransit.startDate)} — ${formatTransitDate(state.currentTransit.endDate)}</span>
    </div>
    ` : ''}
    ${period ? `
    <div style="margin-bottom:8px;">
      <span style="color:#aaa">Period:</span> ${period.siderealPeriod}
      <span style="color:#888;font-size:12px">(${period.signDuration}/sign)</span>
    </div>
    ` : ''}
    ${interp ? `
    <div style="margin-top:10px;padding-top:10px;border-top:1px solid rgba(255,255,255,0.15);">
      <div style="font-size:13px;line-height:1.5;color:#ccc;">${interp.brief}</div>
    </div>
    ` : ''}
  `;
}

function renderSignInfo(panel: HTMLElement, selected: SelectedObject, state: AppState): void {
  const idx = parseInt(selected.id, 10);
  const sign = ZODIAC_SIGNS[idx];
  if (!sign) return;

  // Find planets in this sign
  const planetsInSign: string[] = [];
  for (const [, pos] of state.planetPositions) {
    if (pos.signIndex === idx) {
      const meta = PLANET_MAP.get(pos.id);
      if (meta) planetsInSign.push(`${meta.glyph} ${meta.name}`);
    }
  }

  panel.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
      <span style="font-size:28px">${sign.glyph}</span>
      <span style="font-size:20px;font-weight:bold">${sign.name}</span>
    </div>
    <div style="margin-bottom:8px;">
      <span style="color:#aaa">Degrees:</span>
      ${sign.startDegree.toFixed(0)}° — ${(sign.startDegree + 30).toFixed(0)}°
    </div>
    <div style="margin-bottom:8px;">
      <span style="color:#aaa">Element:</span> ${sign.element.charAt(0).toUpperCase() + sign.element.slice(1)}
    </div>
    <div style="margin-bottom:8px;">
      <span style="color:#aaa">Modality:</span> ${sign.modality.charAt(0).toUpperCase() + sign.modality.slice(1)}
    </div>
    <div style="margin-bottom:8px;">
      <span style="color:#aaa">Ruler:</span> ${sign.ruler}
    </div>
    ${planetsInSign.length > 0 ? `
    <div style="margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.15);">
      <div style="font-weight:bold;margin-bottom:6px;color:#4488ff;">Planets in ${sign.name}</div>
      ${planetsInSign.map(p => `<div style="margin-bottom:2px;">${p}</div>`).join('')}
    </div>
    ` : ''}
  `;
}

function renderRisingInfo(panel: HTMLElement, state: AppState): void {
  const houses = state.houses;
  if (!houses) {
    panel.innerHTML = `
      <div style="font-size:18px;font-weight:bold;margin-bottom:12px;color:#ff4444;">Rising Sign (Ascendant)</div>
      <div style="color:#aaa;">Set a city to calculate your Rising sign.</div>
    `;
    return;
  }

  const ascDeg = houses.ascendant;
  const signIndex = Math.floor(ascDeg / 30) % 12;
  const sign = ZODIAC_SIGNS[signIndex];
  if (!sign) return;
  const signDegree = ascDeg % 30;
  const interp = getRisingInterpretation(sign.name);

  panel.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
      <span style="font-size:28px;color:#ff4444;">↑</span>
      <span style="font-size:20px;font-weight:bold;color:#ff4444;">Rising Sign</span>
    </div>
    <div style="margin-bottom:8px;">
      <span style="color:#aaa">Ascendant:</span>
      ${sign.glyph} <strong>${sign.name}</strong> ${formatDegrees(signDegree)}
    </div>
    <div style="margin-bottom:8px;">
      <span style="color:#aaa">Ecliptic:</span>
      <strong>${formatDegrees(ascDeg)}</strong>
    </div>
    <div style="margin-bottom:8px;">
      <span style="color:#aaa">Element:</span> ${sign.element.charAt(0).toUpperCase() + sign.element.slice(1)}
    </div>
    <div style="margin-bottom:8px;">
      <span style="color:#aaa">Chart ruler:</span> ${sign.ruler}
    </div>
    <div style="padding:8px 0;color:#999;font-size:13px;line-height:1.5;">
      The Ascendant is the degree of the ecliptic rising on the eastern horizon.
      In Hellenistic astrology, this is the most important point in the chart —
      it determines the ruler of the entire nativity.
    </div>
    ${interp ? `
    <div style="padding-top:10px;border-top:1px solid rgba(255,255,255,0.15);">
      <div style="font-size:13px;line-height:1.5;color:#ccc;">${interp.brief}</div>
    </div>
    ` : ''}
  `;
}

function formatTransitDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function renderConstellationInfo(panel: HTMLElement, selected: SelectedObject): void {
  const con = ZODIAC_CONSTELLATIONS.find(c => c.name === selected.id);
  if (!con) {
    panel.innerHTML = `<div style="font-size:18px;font-weight:bold;">${selected.id}</div>`;
    return;
  }

  // Compute real angular extent
  let realSpan = con.extent[1] - con.extent[0];
  if (realSpan < 0) realSpan += 360; // handle Pisces wrapping

  const offset = con.extent[0] - con.conventionalRange[0];

  panel.innerHTML = `
    <div style="font-size:20px;font-weight:bold;margin-bottom:14px;color:#aaddff;">
      ${con.name}
    </div>

    <div style="margin-bottom:12px;">
      <div style="font-weight:bold;color:#4488ff;margin-bottom:6px;">Real Position (astronomy)</div>
      <div style="margin-bottom:4px;">
        <span style="color:#aaa;">Ecliptic extent:</span>
        <strong>${con.extent[0].toFixed(1)}° — ${con.extent[1] < con.extent[0] ? con.extent[1].toFixed(1) + '° (wraps 0°)' : con.extent[1].toFixed(1) + '°'}</strong>
      </div>
      <div>
        <span style="color:#aaa;">Angular width:</span>
        <strong>${realSpan.toFixed(1)}°</strong>
      </div>
    </div>

    <div style="margin-bottom:12px;">
      <div style="font-weight:bold;color:#ffaa44;margin-bottom:6px;">Conventional Sign (astrology)</div>
      <div style="margin-bottom:4px;">
        <span style="color:#aaa;">Sign:</span>
        <strong>${con.conventionalSign}</strong>
        (${con.conventionalRange[0].toFixed(0)}° — ${(con.conventionalRange[1] % 360).toFixed(0)}°)
      </div>
      <div>
        <span style="color:#aaa;">Fixed width:</span>
        <strong>30°</strong> (all signs equal)
      </div>
    </div>

    <div style="margin-bottom:12px;">
      <div style="font-weight:bold;color:#88cc88;margin-bottom:6px;">Precession Offset</div>
      <div>
        The real constellation is shifted <strong>~${Math.abs(offset).toFixed(1)}°</strong> ${offset > 0 ? 'ahead of' : 'behind'} its conventional sign.
      </div>
    </div>

    <div style="padding-top:12px;border-top:1px solid rgba(255,255,255,0.15);">
      <details style="color:#999;font-size:13px;line-height:1.6;">
        <summary style="cursor:pointer;color:#aaa;">Why the difference?</summary>
        <div style="margin-top:6px;">
          Earth's axis wobbles in a ~26,000-year cycle called the
          <em>precession of the equinoxes</em>. Western tropical astrology fixes the signs to the seasons
          (0° Aries = March equinox), while the constellations slowly drift. Today the gap is about 24°.
          This orrery shows both: the <span style="color:#ffaa44;">sign divisions</span> are the
          astrological framework, and the <span style="color:#aaddff;">constellation figures</span> show
          where the stars actually are.
        </div>
      </details>
    </div>
  `;
}

function renderPolarisInfo(panel: HTMLElement): void {
  panel.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
      <span style="font-size:28px;color:#ffffcc;">&#x2B50;</span>
      <span style="font-size:20px;font-weight:bold;color:#ffffcc;">Polaris</span>
    </div>
    <div style="margin-bottom:8px;">
      <span style="color:#aaa">Also known as:</span> The North Star, Alpha Ursae Minoris
    </div>
    <div style="margin-bottom:8px;">
      <span style="color:#aaa">Declination:</span> +89° 15' 51" (nearly at the celestial north pole)
    </div>
    <div style="margin-bottom:8px;">
      <span style="color:#aaa">Apparent magnitude:</span> 1.98 (visible to the naked eye)
    </div>
    <div style="padding:8px 0;color:#ccc;font-size:13px;line-height:1.6;">
      Polaris sits less than 1° from the north celestial pole — the point in the sky directly
      above Earth's north pole. As Earth rotates, all stars appear to circle around this point,
      but Polaris barely moves. This makes it the anchor of the night sky.
    </div>
    <div style="padding-top:10px;border-top:1px solid rgba(255,255,255,0.15);">
      <div style="font-weight:bold;color:#88ccff;margin-bottom:6px;">Orientation</div>
      <div style="font-size:13px;line-height:1.6;color:#ccc;">
        The dashed line from Earth's axis to Polaris shows the direction of celestial north.
        The arrow around the north pole shows Earth's rotation direction (west → east,
        counterclockwise when viewed from above). All stars, the Sun, Moon, and planets
        appear to rise in the east and set in the west — the opposite of Earth's rotation —
        because we are rotating underneath them.
      </div>
    </div>
    <details style="margin-top:10px;color:#999;font-size:13px;line-height:1.6;">
      <summary style="cursor:pointer;color:#aaa;">Why Polaris isn't permanent</summary>
      <div style="margin-top:6px;">
        Due to precession, Earth's axis slowly traces a circle in the sky over ~26,000 years.
        Polaris is our current north star, but around 3000 BCE it was Thuban (Alpha Draconis),
        and in ~13,000 years it will be Vega. Polaris is closest to the true pole around 2100 CE.
      </div>
    </details>
  `;
}
