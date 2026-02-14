import flatpickr from 'flatpickr';
import type { Instance as FlatpickrInstance } from 'flatpickr/dist/types/instance';
import 'flatpickr/dist/flatpickr.min.css';

export interface DateTimePicker {
  element: HTMLElement;
  /** Update the displayed date without triggering onChange */
  setDate(date: Date): void;
}

export function createDateTimePicker(
  onChange: (date: Date) => void,
  initialDate: Date
): DateTimePicker {
  const container = document.createElement('div');
  container.dataset.testid = 'date-picker';
  container.style.cssText = `
    pointer-events: auto;
    display: flex;
    gap: 6px;
    align-items: center;
  `;

  const input = document.createElement('input');
  input.type = 'text';
  input.dataset.testid = 'datetime-input';
  input.className = 'toolbar-date-input';
  input.style.cssText = `
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 6px;
    color: #fff;
    padding: 0 10px;
    font-size: 14px;
    height: 36px;
    width: 190px;
    cursor: pointer;
    font-family: inherit;
    box-sizing: border-box;
  `;

  container.appendChild(input);

  // Inject dark theme overrides for flatpickr
  const style = document.createElement('style');
  style.textContent = `
    .flatpickr-calendar {
      background: rgba(10, 10, 20, 0.95) !important;
      border: 1px solid rgba(255,255,255,0.2) !important;
      border-radius: 8px !important;
      backdrop-filter: blur(12px) !important;
      box-shadow: 0 8px 32px rgba(0,0,0,0.6) !important;
      font-family: system-ui, -apple-system, sans-serif !important;
    }
    .flatpickr-months .flatpickr-month,
    .flatpickr-current-month .flatpickr-monthDropdown-months,
    .flatpickr-weekdays, span.flatpickr-weekday {
      background: transparent !important;
      color: rgba(255,255,255,0.7) !important;
    }
    .flatpickr-day {
      color: #fff !important;
      border-radius: 4px !important;
    }
    .flatpickr-day:hover {
      background: rgba(68, 136, 255, 0.3) !important;
      border-color: transparent !important;
    }
    .flatpickr-day.selected {
      background: #4488ff !important;
      border-color: #4488ff !important;
    }
    .flatpickr-day.today {
      border-color: rgba(68, 136, 255, 0.5) !important;
    }
    .flatpickr-months .flatpickr-prev-month,
    .flatpickr-months .flatpickr-next-month {
      fill: #fff !important;
    }
    .flatpickr-months .flatpickr-prev-month:hover svg,
    .flatpickr-months .flatpickr-next-month:hover svg {
      fill: #4488ff !important;
    }
    .flatpickr-current-month input.cur-year {
      color: #fff !important;
    }
    .flatpickr-time {
      background: rgba(10, 10, 20, 0.95) !important;
      border-top: 1px solid rgba(255,255,255,0.15) !important;
    }
    .flatpickr-time input, .flatpickr-time .flatpickr-am-pm {
      color: #fff !important;
      background: transparent !important;
    }
    .flatpickr-time .flatpickr-am-pm:hover {
      background: rgba(68, 136, 255, 0.2) !important;
    }
    .flatpickr-time .flatpickr-time-separator {
      color: rgba(255,255,255,0.5) !important;
    }
    .flatpickr-time input:focus {
      background: rgba(68, 136, 255, 0.15) !important;
    }
    .numInputWrapper span {
      border-color: rgba(255,255,255,0.2) !important;
    }
    .numInputWrapper span:hover {
      background: rgba(68, 136, 255, 0.2) !important;
    }
    .numInputWrapper span svg path {
      fill: rgba(255,255,255,0.5) !important;
    }
    .flatpickr-current-month .flatpickr-monthDropdown-months option {
      background: #0a0a14 !important;
      color: #fff !important;
    }
  `;
  document.head.appendChild(style);

  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  let fp: FlatpickrInstance;
  fp = flatpickr(input, {
    defaultDate: initialDate,
    enableTime: true,
    time_24hr: false,
    dateFormat: isMobile ? 'M j, Y h:iK' : 'Y-m-d h:i K',
    onChange: (selectedDates) => {
      if (selectedDates[0]) {
        onChange(selectedDates[0]);
      }
    },
  }) as FlatpickrInstance;

  return {
    element: container,
    setDate(date: Date) {
      fp.setDate(date, false); // false = don't trigger onChange
    },
  };
}
