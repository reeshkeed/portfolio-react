import { defineConfig, resolveBaseUrl } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const aliases = {
  '@assets': resolve(__dirname, './src/assets'),
  '@pages': resolve(__dirname, './src/pages'),
  '@components': resolve(__dirname, './src/components'),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { alias: aliases },
});
