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
    overflow: hidden;
    touch-action: none;
  `;
  return overlay;
}

/** Show a welcome message in the info panel. Returns the panel content as HTML string. */
export function showWelcomeInPanel(panel: HTMLElement): void {
  panel.style.display = 'block';
  panel.innerHTML = `
    <div style="font-size:18px;font-weight:bold;margin-bottom:14px;">Current position of the stars</div>
    <div style="font-size:14px;color:#ccc;margin-bottom:12px;line-height:1.6;">
      Tap a planet or a sign to get started.
    </div>
    <div style="font-size:14px;color:#ccc;line-height:1.6;">
      Set your birthday, time, and city to see the stars at the moment you were born.
    </div>
  `;
}
