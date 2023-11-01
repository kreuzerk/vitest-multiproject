/// <reference types="vitest" />
import { defineConfig } from 'vite';

import angular from '@analogjs/vite-plugin-angular';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => ({
  plugins: [
    angular({
      tsconfig: './projects/my-app/tsconfig.app.json',
      workspaceRoot: './projects/my-app/'
    }),
    viteTsConfigPaths({
      root: './projects/my-app/'
    }),
  ],
  test: {
    globals: true,
    setupFiles: ['projects/my-app/src/test.ts'],
    reporters: ['verbose'],
    environment: 'jsdom',
    include: ['projects/my-app/src/app/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
