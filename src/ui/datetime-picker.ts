export function createDateTimePicker(
  onChange: (date: Date) => void,
  initialDate: Date
): HTMLElement {
  const container = document.createElement('div');
  container.style.cssText = `
    position: absolute;
    top: 12px; left: 12px;
    pointer-events: auto;
    background: rgba(0,0,0,0.75);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 8px;
    padding: 10px 14px;
    display: flex;
    gap: 8px;
    align-items: center;
    backdrop-filter: blur(8px);
  `;
  container.dataset.testid = 'date-picker';

  const dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.dataset.testid = 'date-input';
  dateInput.style.cssText = `
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 4px;
    color: #fff;
    padding: 4px 8px;
    font-size: 14px;
  `;

  const timeInput = document.createElement('input');
  timeInput.type = 'time';
  timeInput.dataset.testid = 'time-input';
  timeInput.style.cssText = dateInput.style.cssText;

  function setInputValues(d: Date): void {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    dateInput.value = `${y}-${m}-${day}`;
    const h = String(d.getHours()).padStart(2, '0');
    const min = String(d.getMinutes()).padStart(2, '0');
    timeInput.value = `${h}:${min}`;
  }

  setInputValues(initialDate);

  function emitChange(): void {
    if (!dateInput.value || !timeInput.value) return;
    const [y, m, d] = dateInput.value.split('-').map(Number) as [number, number, number];
    const [h, min] = timeInput.value.split(':').map(Number) as [number, number];
    const newDate = new Date(y, m - 1, d, h, min);
    onChange(newDate);
  }

  dateInput.addEventListener('change', emitChange);
  timeInput.addEventListener('change', emitChange);

  container.appendChild(dateInput);
  container.appendChild(timeInput);

  return container;
}
