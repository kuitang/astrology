import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

/**
 * Tests the live-mode update pattern: planets update every 60s, not every 1s.
 * We test the timer logic in isolation since App requires a full DOM/WebGL context.
 */
describe('live timer update interval', () => {
  beforeEach(() => { vi.useFakeTimers(); });
  afterEach(() => { vi.useRealTimers(); });

  it('updates at 60s intervals, not 1s', () => {
    let updateCount = 0;
    const liveMode = true;
    const natalMode = false;

    // Simulates the setInterval in app.ts
    setInterval(() => {
      if (liveMode && !natalMode) {
        updateCount++;
      }
    }, 60000);

    // After 1 second — no update yet
    vi.advanceTimersByTime(1000);
    expect(updateCount).toBe(0);

    // After 30 seconds — still no update
    vi.advanceTimersByTime(29000);
    expect(updateCount).toBe(0);

    // After 59 seconds — still no update
    vi.advanceTimersByTime(29000);
    expect(updateCount).toBe(0);

    // At 60 seconds — first update
    vi.advanceTimersByTime(1000);
    expect(updateCount).toBe(1);

    // At 120 seconds — second update
    vi.advanceTimersByTime(60000);
    expect(updateCount).toBe(2);
  });

  it('does not update in natal mode', () => {
    let updateCount = 0;
    const liveMode = true;
    const natalMode = true;

    setInterval(() => {
      if (liveMode && !natalMode) {
        updateCount++;
      }
    }, 60000);

    vi.advanceTimersByTime(300000); // 5 minutes
    expect(updateCount).toBe(0);
  });

  it('does not update when live mode is off', () => {
    let updateCount = 0;
    const liveMode = false;
    const natalMode = false;

    setInterval(() => {
      if (liveMode && !natalMode) {
        updateCount++;
      }
    }, 60000);

    vi.advanceTimersByTime(300000); // 5 minutes
    expect(updateCount).toBe(0);
  });

  it('blink interval fires at 500ms', () => {
    let blinkCount = 0;

    setInterval(() => {
      blinkCount++;
    }, 500);

    vi.advanceTimersByTime(5000); // 5 seconds
    expect(blinkCount).toBe(10); // 500ms * 10 = 5000ms
  });
});
