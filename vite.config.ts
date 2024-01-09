import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      assets: resolve(__dirname, './src/assets'),
      components: resolve(__dirname, './src/components'),
      context: resolve(__dirname, './src/context'),
      layout: resolve(__dirname, './src/layout'),
      pages: resolve(__dirname, './src/pages'),
      store: resolve(__dirname, './src/store'),
      style: resolve(__dirname, './src/style'),
    },
  },
});