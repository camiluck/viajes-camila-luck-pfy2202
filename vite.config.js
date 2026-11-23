import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' permite que el build funcione en GitHub Pages
// sin importar el nombre del repositorio (usamos HashRouter).
export default defineConfig({
  plugins: [react()],
  base: './',
})
