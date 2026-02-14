export function createLoadingScreen(): HTMLElement {
  const screen = document.createElement('div');
  screen.id = 'loading-screen';
  screen.style.cssText = `
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 100;
    transition: opacity 0.5s ease;
  `;

  screen.innerHTML = `
    <div style="font-size: 24px; margin-bottom: 16px;">Astrology Orrery</div>
    <div style="color: #888; font-size: 14px;" id="loading-status">Initializing...</div>
  `;

  return screen;
}

export function updateLoadingStatus(text: string): void {
  const el = document.getElementById('loading-status');
  if (el) el.textContent = text;
}

export function hideLoadingScreen(): void {
  const screen = document.getElementById('loading-screen');
  if (screen) {
    screen.style.opacity = '0';
    setTimeout(() => screen.remove(), 500);
  }
}
