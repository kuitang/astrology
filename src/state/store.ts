import type { AppState } from '../types/astro.js';

type Listener<K extends keyof AppState> = (value: AppState[K], state: AppState) => void;
type AnyListener = (state: AppState) => void;

class Store {
  private state: AppState;
  private listeners = new Map<keyof AppState, Set<Listener<never>>>();
  private anyListeners = new Set<AnyListener>();

  constructor() {
    this.state = {
      date: new Date(),
      latitude: 0,
      longitude: 0,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      planetPositions: new Map(),
      houses: null,
      selectedObject: null,
      currentTransit: null,
      selectedDignity: null,
      natalMode: false,
      interpretationStyle: 'traditional',
      zodiacSegmentCount: 12,
      loading: true,
      ready: false,
    };
  }

  getState(): AppState {
    return this.state;
  }

  setState(partial: Partial<AppState>): void {
    const changed = new Set<keyof AppState>();
    for (const key of Object.keys(partial) as (keyof AppState)[]) {
      if (this.state[key] !== partial[key]) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (this.state as any)[key] = partial[key];
        changed.add(key);
      }
    }
    for (const key of changed) {
      const set = this.listeners.get(key);
      if (set) {
        for (const fn of set) {
          (fn as Listener<typeof key>)(this.state[key], this.state);
        }
      }
    }
    if (changed.size > 0) {
      for (const fn of this.anyListeners) {
        fn(this.state);
      }
    }
  }

  subscribe<K extends keyof AppState>(key: K, fn: Listener<K>): () => void {
    let set = this.listeners.get(key);
    if (!set) {
      set = new Set();
      this.listeners.set(key, set);
    }
    set.add(fn as Listener<never>);
    return () => { set!.delete(fn as Listener<never>); };
  }

  subscribeAll(fn: AnyListener): () => void {
    this.anyListeners.add(fn);
    return () => { this.anyListeners.delete(fn); };
  }
}

export const store = new Store();
