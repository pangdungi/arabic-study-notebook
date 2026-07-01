import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: https://pangdungi.github.io/arabic-study-notebook/
const repoName = 'arabic-study-notebook'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? `/${repoName}/` : './',
}))
