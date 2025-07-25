import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      // ❌ Remove 'react-router-dom' from external
      external: [], // Keep empty unless you have a specific reason
    },
  },
})