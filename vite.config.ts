import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080,
    strictPort: false, // Se 8080 estiver ocupada, tenta outra
    open: true, // Abre o navegador automaticamente
    host: true, // Expõe na rede local
  },
})

