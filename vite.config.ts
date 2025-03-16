import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Japanese-Restaurant-Project/', // Set base path for GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for build files
  },
})
