// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/hammad-portfolio/', // Update this to your Vercel project name
  plugins: [react()],
  build: {
    outDir: 'dist', // Default output folder
    sourcemap: false, // Disable source maps for a smaller build
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
  },
});