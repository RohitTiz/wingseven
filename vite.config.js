import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',  // ← Critical for Vercel
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: './index.html'  // ← Ensures HTML processing
    }
  },
  server: {
    historyApiFallback: true  // ← For client-side routing
  }
});
