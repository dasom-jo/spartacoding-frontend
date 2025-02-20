import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['src/**/*.test.ts', 'src/*.test.ts'],
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.js'],
  },
});
