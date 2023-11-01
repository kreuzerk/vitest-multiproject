/// <reference types="vitest" />
import { defineConfig } from 'vite';

import angular from '@analogjs/vite-plugin-angular';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => ({
  plugins: [
    angular(),
    viteTsConfigPaths({
      root: './projects/my-lib/'
    }),
  ],
  test: {
    globals: true,
    setupFiles: ['projects/my-lib/src/test.ts'],
    reporters: ['verbose'],
    environment: 'jsdom',
    include: ['projects/my-lib/src/lib/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
