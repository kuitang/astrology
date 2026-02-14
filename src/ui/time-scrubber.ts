export function createTimeScrubber(
  onScrub: (offsetDays: number) => void
): HTMLElement {
  const container = document.createElement('div');
  container.style.cssText = `
    position: absolute;
    bottom: 20px; left: 50%;
    transform: translateX(-50%);
    pointer-events: auto;
    width: min(420px, 85vw);
    background: rgba(0,0,0,0.75);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 8px;
    padding: 8px 14px;
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    gap: 8px;
  `;
  container.dataset.testid = 'time-scrubber';

  const minLabel = document.createElement('span');
  minLabel.style.cssText = 'font-size:11px;color:#888;white-space:nowrap;';
  minLabel.textContent = '-1y';

  const slider = document.createElement('input');
  slider.type = 'range';
  slider.min = '-365';
  slider.max = '365';
  slider.value = '0';
  slider.style.cssText = 'flex:1;accent-color:#4488ff;';

  const maxLabel = document.createElement('span');
  maxLabel.style.cssText = 'font-size:11px;color:#888;white-space:nowrap;';
  maxLabel.textContent = '+1y';

  // Today button with live clock
  const todayBtn = document.createElement('button');
  todayBtn.dataset.testid = 'today-btn';
  todayBtn.style.cssText = `
    font-size: 11px;
    color: #4488ff;
    background: rgba(68,136,255,0.15);
    border: 1px solid rgba(68,136,255,0.3);
    border-radius: 4px;
    padding: 2px 8px;
    cursor: pointer;
    white-space: nowrap;
    font-family: inherit;
    line-height: 1.4;
    text-align: center;
  `;

  function updateClock() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    todayBtn.innerHTML = `Now<br><span style="font-size:10px;opacity:0.7">${h}:${m}</span>`;
  }
  updateClock();
  setInterval(updateClock, 60000);

  todayBtn.addEventListener('mouseenter', () => {
    todayBtn.style.background = 'rgba(68,136,255,0.3)';
  });
  todayBtn.addEventListener('mouseleave', () => {
    todayBtn.style.background = 'rgba(68,136,255,0.15)';
  });

  slider.addEventListener('input', () => {
    const days = parseInt(slider.value, 10);
    onScrub(days);
  });

  todayBtn.addEventListener('click', () => {
    slider.value = '0';
    onScrub(0);
  });

  container.appendChild(minLabel);
  container.appendChild(slider);
  container.appendChild(maxLabel);
  container.appendChild(todayBtn);
  return container;
}
