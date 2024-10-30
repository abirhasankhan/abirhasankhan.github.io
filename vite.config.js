// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Ensure this matches your GitHub repository name
  build: {
    outDir: 'dist', // Ensures output is in the correct folder
  },
});
