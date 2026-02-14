export function createOverlay(): HTMLDivElement {
  const overlay = document.createElement('div');
  overlay.id = 'ui-overlay';
  overlay.style.cssText = `
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    pointer-events: none;
    z-index: 10;
    font-family: system-ui, -apple-system, sans-serif;
    color: #fff;
  `;
  return overlay;
}
