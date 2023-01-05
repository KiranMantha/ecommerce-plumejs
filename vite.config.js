/// <reference types="vitest" />
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '',
  build: {
    outDir: 'docs',
    sourcemap: false,
    rollupOptions: {
      plugins: [
        visualizer({
          title: 'Ecommerce app with plumejs',
          open: true
        })
      ]
    }
  },
  server: {
    host: true,
    port: 3001,
    open: '/'
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    deps: {
      inline: true
    },
    coverage: {
      reporter: ['text', 'json', 'html'],
      cleanOnRerun: true,
      reportsDirectory: 'coverage'
    }
  }
});
