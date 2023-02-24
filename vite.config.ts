import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      Components: resolve(__dirname, './src/components'),
      Utils: resolve(__dirname, './src/utils'),
      Queries: resolve(__dirname, './src/queries'),
    },
  },
});
