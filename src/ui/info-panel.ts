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
  return panel;
}

export function updateInfoPanel(panel: HTMLElement, state: AppState): void {
  const selected = state.selectedObject;
  if (!selected) {
    panel.style.display = 'none';
    return;
  }

  const wasHidden = panel.style.display === 'none';
  panel.style.display = 'block';
  if (wasHidden) {
    panel.style.animation = 'none';
    void panel.offsetHeight;
    panel.style.animation = '';
  }

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

/** Build a compact header row with glyph + name */
function header(glyph: string, name: string, color = '#fff'): string {
  return `<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;">
    <span style="font-size:22px;color:${color}">${glyph}</span>
    <span style="font-size:16px;font-weight:bold;color:${color}">${name}</span>
  </div>`;
}

/** Build grid rows from key-value pairs */
function grid(rows: [string, string][]): string {
  return `<dl class="info-grid">${rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>`;
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
  const interp = getInterpretation(meta.name, sign.name, state.natalMode);
  const period = PLANETARY_PERIODS[meta.name];
  const colorHex = `#${meta.color.toString(16).padStart(6, '0')}`;

  // Pairs arranged for 4-column grid: [label, value, label, value] per row
  const rows: [string, string][] = [
    ['Position', `<strong>${formatDegrees(pos.longitude)}</strong>`],
    ['Sign', `${sign.glyph} <strong>${sign.name}</strong> ${formatDegrees(pos.signDegree)}`],
    ['Speed', `${pos.speed > 0 ? '→' : '←'} ${Math.abs(pos.speed).toFixed(1)}°/d${pos.speed < 0 ? ' <span style="color:#ff4444">Rx</span>' : ''}`],
    ['Dignity', `<span style="color:${dignityColor};font-weight:bold">${DIGNITY_LABELS[dignity]}</span>`],
  ];
  if (state.currentTransit && period) {
    rows.push(
      ['Transit', `${fmtDate(state.currentTransit.startDate)} — ${fmtDate(state.currentTransit.endDate)}`],
      ['Period', `${period.siderealPeriod}`],
    );
  } else if (state.currentTransit) {
    rows.push(['Transit', `${fmtDate(state.currentTransit.startDate)} — ${fmtDate(state.currentTransit.endDate)}`]);
  } else if (period) {
    rows.push(['Period', `${period.siderealPeriod} <span style="color:#888;font-size:11px">(${period.signDuration}/sign)</span>`]);
  }

  panel.innerHTML = header(meta.glyph, meta.name, colorHex)
    + grid(rows)
    + (interp ? `<div class="interp-text">${interp.brief}</div>` : '');
}

function renderSignInfo(panel: HTMLElement, selected: SelectedObject, state: AppState): void {
  const idx = parseInt(selected.id, 10);
  const sign = ZODIAC_SIGNS[idx];
  if (!sign) return;

  const planetsInSign: string[] = [];
  for (const [, pos] of state.planetPositions) {
    if (pos.signIndex === idx) {
      const meta = PLANET_MAP.get(pos.id);
      if (meta) planetsInSign.push(`${meta.glyph} ${meta.name}`);
    }
  }

  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  panel.innerHTML = header(sign.glyph, sign.name)
    + grid([
      ['Degrees', `${sign.startDegree.toFixed(0)}° — ${(sign.startDegree + 30).toFixed(0)}°`],
      ['Element', cap(sign.element)],
      ['Modality', cap(sign.modality)],
      ['Ruler', sign.ruler],
    ])
    + (planetsInSign.length > 0
      ? `<div style="border-top:1px solid rgba(255,255,255,0.12);padding-top:6px;margin-top:4px;">
          <dt style="color:#4488ff;font-size:12px;margin-bottom:2px;">Planets here</dt>
          <dd style="margin:0">${planetsInSign.join(' · ')}</dd>
        </div>`
      : '');
}

function renderRisingInfo(panel: HTMLElement, state: AppState): void {
  const houses = state.houses;
  if (!houses) {
    panel.innerHTML = header('↑', 'Rising Sign', '#ff4444')
      + `<div style="color:#aaa;font-size:12px;">Set a city to calculate the Ascendant.</div>`;
    return;
  }

  const ascDeg = houses.ascendant;
  const signIndex = Math.floor(ascDeg / 30) % 12;
  const sign = ZODIAC_SIGNS[signIndex];
  if (!sign) return;
  const signDegree = ascDeg % 30;
  const interp = getRisingInterpretation(sign.name);

  panel.innerHTML = header('↑', 'Rising Sign', '#ff4444')
    + grid([
      ['Ascendant', `${sign.glyph} <strong>${sign.name}</strong> ${formatDegrees(signDegree)}`],
      ['Ecliptic', `<strong>${formatDegrees(ascDeg)}</strong>`],
      ['Element', sign.element.charAt(0).toUpperCase() + sign.element.slice(1)],
      ['Chart ruler', sign.ruler],
    ])
    + `<div class="interp-text" style="color:#999">The Ascendant — the ecliptic degree rising on the eastern horizon — determines the ruler of the entire nativity.</div>`
    + (interp ? `<div class="interp-text">${interp.brief}</div>` : '');
}

function renderConstellationInfo(panel: HTMLElement, selected: SelectedObject): void {
  const con = ZODIAC_CONSTELLATIONS.find(c => c.name === selected.id);
  if (!con) {
    panel.innerHTML = header('', selected.id, '#aaddff');
    return;
  }

  let realSpan = con.extent[1] - con.extent[0];
  if (realSpan < 0) realSpan += 360;
  const offset = con.extent[0] - con.conventionalRange[0];

  panel.innerHTML = header('', con.name, '#aaddff')
    + grid([
      ['Ecliptic extent', `<strong>${con.extent[0].toFixed(1)}° — ${con.extent[1].toFixed(1)}°</strong>`],
      ['Angular width', `<strong>${realSpan.toFixed(1)}°</strong>`],
      ['Sign', `${con.conventionalSign} (${con.conventionalRange[0].toFixed(0)}°–${(con.conventionalRange[1] % 360).toFixed(0)}°, 30° fixed)`],
      ['Precession offset', `<strong>~${Math.abs(offset).toFixed(1)}°</strong> ${offset > 0 ? 'ahead' : 'behind'}`],
    ])
    + `<details><summary>Why the difference?</summary>
      <div style="margin-top:4px;">
        Earth's axis wobbles in a ~26,000-year cycle (<em>precession of the equinoxes</em>).
        Western tropical astrology fixes signs to the seasons (0° Aries = March equinox),
        while the constellations slowly drift. Today the gap is about 24°.
        This orrery shows both: <span style="color:#ffaa44">sign divisions</span> (astrological)
        and <span style="color:#aaddff">constellation figures</span> (astronomical).
      </div>
    </details>`;
}

function renderPolarisInfo(panel: HTMLElement): void {
  panel.innerHTML = header('⭐', 'Polaris', '#ffffcc')
    + grid([
      ['Also known as', 'The North Star, α UMi'],
      ['Declination', '+89° 15\' 51"'],
      ['Magnitude', '1.98 (naked-eye)'],
      ['Tropical sign', '♊ <strong>Gemini</strong> 28.6° <span style="color:#888;font-size:11px">(ecl. lat +66.1°)</span>'],
      ['Tradition', 'Guidance, direction, spiritual compass'],
    ])
    + `<div class="interp-text">Polaris sits &lt;1° from the north celestial pole. As Earth rotates, all stars circle this point, but Polaris barely moves — the anchor of the night sky.</div>`
    + `<details><summary>The Great Year &amp; precession</summary>
      <div style="margin-top:4px;">
        Earth's axis traces a circle over one <em>Great Year</em> (~25,772 years).
        The vernal equinox drifts backward through the constellations, defining the
        astrological "Ages." All stars' tropical longitudes increase ~1° every 72 years.
        Polaris is currently at 28.6° Gemini and will enter Cancer around 2125 CE.
        Our current north star was Thuban (α Dra) around 3000 BCE; in ~13,000 years it will be Vega.
      </div>
    </details>`;
}

function fmtDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
