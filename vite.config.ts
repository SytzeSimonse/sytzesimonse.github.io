import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      buffer: 'buffer/',
    },
  },
  define: {
    'global': 'globalThis',
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      }
    }
  },
  // GitHub Pages deployment configuration
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure source maps for debugging
    sourcemap: false,
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'markdown-vendor': ['react-markdown', 'remark-gfm', 'rehype-raw', 'rehype-sanitize', 'gray-matter'],
        },
      },
    },
  },
  // Allow importing markdown files as raw text
  assetsInclude: ['**/*.md'],
})
