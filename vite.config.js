// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Include image files
  assetsInclude: ['**/*.png', '**/*.PNG', '**/*.jpg', '**/*.JPG'],
  base: '/', // Serve from root, not /portfolio/
  build: {
    outDir: 'dist', // Output folder
  },
});
