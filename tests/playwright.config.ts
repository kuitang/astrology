import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  testMatch: '*.spec.ts',
  timeout: 60000,
  use: {
    baseURL: 'http://localhost:5173/astrology/',
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000,
  },
  webServer: {
    command: 'npm run dev',
    port: 5173,
    reuseExistingServer: true,
  },
});
