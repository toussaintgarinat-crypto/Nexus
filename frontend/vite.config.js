import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/auth': 'http://localhost:8000',
      '/worlds': 'http://localhost:8000',
      '/channels': 'http://localhost:8000',
      '/messages': 'http://localhost:8000',
      '/ai': 'http://localhost:8000',
      '/tokens': 'http://localhost:8000',
      '/config': 'http://localhost:8000',
      '/files': 'http://localhost:8000',
    }
  },
  optimizeDeps: {
    exclude: ['@excalidraw/excalidraw']
  }
})
