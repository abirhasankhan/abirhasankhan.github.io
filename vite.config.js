import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Set to your repo name to generate correct paths
  build: {
    outDir: 'dist', // Ensures output is in the correct folder
  },
});
