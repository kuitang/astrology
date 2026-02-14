import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  base: '/', // Using custom domain astrology3d.app
  server: {
    allowedHosts: true,
  },
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          'astronomy-engine': ['astronomy-engine'],
        },
      },
    },
  },
  test: {
    // Only include unit tests, not Playwright E2E specs
    include: ['tests/unit/**/*.test.ts'],
  },
}));
