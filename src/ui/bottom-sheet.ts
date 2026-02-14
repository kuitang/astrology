export function createBottomSheet(): HTMLElement {
  const sheet = document.createElement('div');
  sheet.dataset.testid = 'bottom-sheet';
  sheet.style.cssText = `
    position: absolute;
    bottom: 0; left: 0; right: 0;
    max-height: 60vh;
    background: rgba(0,0,0,0.9);
    border-top: 1px solid rgba(255,255,255,0.2);
    border-radius: 16px 16px 0 0;
    pointer-events: auto;
    overflow-y: auto;
    display: none;
    padding: 16px;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
  `;

  // Drag handle
  const handle = document.createElement('div');
  handle.style.cssText = `
    width: 40px; height: 4px;
    background: rgba(255,255,255,0.3);
    border-radius: 2px;
    margin: 0 auto 12px;
  `;
  sheet.prepend(handle);

  return sheet;
}
