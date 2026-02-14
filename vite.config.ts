import { defineConfig } from 'vite';

export default defineConfig({
  base: '/astrology/',
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
});
