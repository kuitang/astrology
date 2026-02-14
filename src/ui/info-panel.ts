import type { AppState, SelectedObject } from '../types/astro.js';
import { ZODIAC_SIGNS } from '../data/zodiac-signs.js';
import { PLANET_MAP } from '../data/planet-metadata.js';
import { getDignity, DIGNITY_LABELS, DIGNITY_COLORS } from '../data/dignities.js';
import { formatDegrees } from '../utils/math.js';
import { isMobile } from '../utils/responsive.js';

export function createInfoPanel(): HTMLElement {
  const panel = document.createElement('div');
  panel.id = 'info-panel';
  panel.dataset.testid = 'info-panel';
  panel.style.cssText = `
    position: absolute;
    ${isMobile() ? 'bottom: 0; left: 0; right: 0; max-height: 50vh;' : 'top: 12px; right: 12px; width: 280px;'}
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
      ${pos.speed > 0 ? '→' : '←'} ${Math.abs(pos.speed).toFixed(2)}°/day
      ${pos.speed < 0 ? '<span style="color:#ff4444"> (Retrograde)</span>' : ''}
    </div>
    <div style="margin-bottom:8px;">
      <span style="color:#aaa">Dignity:</span>
      <span style="color:${dignityColor};font-weight:bold">${DIGNITY_LABELS[dignity]}</span>
    </div>
    <div style="margin-bottom:8px;">
      <span style="color:#aaa">Distance:</span> ${pos.distance.toFixed(4)} AU
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
      ${sign.startDegree}° — ${sign.startDegree + 30}°
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
  panel.innerHTML = `
    <div style="font-size:20px;font-weight:bold;margin-bottom:12px;">${selected.id}</div>
    <div style="color:#aaa;">
      This is the astronomical constellation ${selected.id}, shown at its real ecliptic position.
      Due to precession (~24°), constellation positions differ from the tropical zodiac signs.
    </div>
  `;
}
