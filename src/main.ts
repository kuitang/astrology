import { App } from './app.js';
import { createLoadingScreen, updateLoadingStatus, hideLoadingScreen } from './ui/loading-screen.js';

declare global {
  interface Window {
    __APP__: App;
    __APP_READY__: boolean;
    __CONSOLE_ERRORS__: string[];
    __WEBGL_ERRORS__: string[];
  }
}

// Track console errors
window.__CONSOLE_ERRORS__ = [];
window.__WEBGL_ERRORS__ = [];
const origError = console.error;
console.error = (...args: unknown[]) => {
  window.__CONSOLE_ERRORS__.push(args.map(String).join(' '));
  origError.apply(console, args);
};

async function boot(): Promise<void> {
  const container = document.getElementById('app');
  if (!container) throw new Error('Missing #app container');

  // Show loading screen
  const loadingScreen = createLoadingScreen();
  document.body.appendChild(loadingScreen);

  updateLoadingStatus('Building scene...');

  const app = new App(container);
  app.init();

  // Expose for tests
  window.__APP__ = app;
  window.__APP_READY__ = true;

  updateLoadingStatus('Ready');
  hideLoadingScreen();
}

boot().catch((err) => {
  console.error('Boot failed:', err);
  const status = document.getElementById('loading-status');
  if (status) status.textContent = `Error: ${err instanceof Error ? err.message : String(err)}`;
});
