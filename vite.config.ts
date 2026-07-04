import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
    open: '/',
  },
  preview: {
    host: 'localhost',
    port: 4173,
    strictPort: true,
    open: '/',
  },
})
