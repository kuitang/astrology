export function createTimeScrubber(
  onScrub: (offsetDays: number) => void
): HTMLElement {
  const container = document.createElement('div');
  container.style.cssText = `
    position: absolute;
    bottom: 20px; left: 50%;
    transform: translateX(-50%);
    pointer-events: auto;
    width: min(400px, 80vw);
    background: rgba(0,0,0,0.75);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 8px;
    padding: 8px 14px;
    backdrop-filter: blur(8px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  `;
  container.dataset.testid = 'time-scrubber';

  const label = document.createElement('div');
  label.style.cssText = 'font-size:12px;color:#aaa;';
  label.textContent = 'Time offset: 0 days';

  const slider = document.createElement('input');
  slider.type = 'range';
  slider.min = '-365';
  slider.max = '365';
  slider.value = '0';
  slider.style.cssText = 'width:100%;accent-color:#4488ff;';

  slider.addEventListener('input', () => {
    const days = parseInt(slider.value, 10);
    label.textContent = `Time offset: ${days} days`;
    onScrub(days);
  });

  container.appendChild(label);
  container.appendChild(slider);
  return container;
}
