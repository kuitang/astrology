import type { AppState, SelectedObject } from '../types/astro.js';
import { ZODIAC_SIGNS } from '../data/zodiac-signs.js';
import { PLANET_MAP } from '../data/planet-metadata.js';
import { getDignity, DIGNITY_LABELS, DIGNITY_COLORS } from '../data/dignities.js';
import { ZODIAC_CONSTELLATIONS } from '../scene/constellations.js';
import { formatDegrees } from '../utils/math.js';
import { isMobile } from '../utils/responsive.js';

export function createInfoPanel(): HTMLElement {
  const panel = document.createElement('div');
  panel.id = 'info-panel';
  panel.dataset.testid = 'info-panel';
  panel.style.cssText = `
    position: absolute;
    ${isMobile() ? 'bottom: 0; left: 0; right: 0; max-height: 50vh;' : 'top: 60px; right: 12px; width: 300px; max-height: 70vh;'}
    pointer-events: auto;
    background: rgba(0,0,0,0.8);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: ${isMobile() ? '16px 16px 0 0' : '8px'};
    padding: 16px;
    backdrop-filter: blur(8px);
    display: none;
    overflow-y: auto;
    font-size: 14px;
    line-height: 1.5;
  `;

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
    <div style="margin-bottom:8px;">
      <span style="color:#aaa">Distance:</span> ${pos.distance.toFixed(1)} AU
    </div>
    ${state.currentTransit ? `
    <div style="margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.15);">
      <div style="font-weight:bold;margin-bottom:6px;color:#4488ff;">Transit</div>
      <div style="margin-bottom:4px;">
        ${sign.glyph} <strong>${sign.name}</strong>
      </div>
      <div style="font-size:13px;color:#aaa;">
        ${formatTransitDate(state.currentTransit.startDate)} — ${formatTransitDate(state.currentTransit.endDate)}
      </div>
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

    <div style="padding-top:12px;border-top:1px solid rgba(255,255,255,0.15);color:#999;font-size:13px;line-height:1.6;">
      <strong>Why the difference?</strong> Earth's axis wobbles in a ~26,000-year cycle called the
      <em>precession of the equinoxes</em>. Western tropical astrology fixes the signs to the seasons
      (0° Aries = March equinox), while the constellations slowly drift. Today the gap is about 24°.
      This orrery shows both: the <span style="color:#ffaa44;">sign divisions</span> are the
      astrological framework, and the <span style="color:#aaddff;">constellation figures</span> show
      where the stars actually are.
    </div>
  `;
}
