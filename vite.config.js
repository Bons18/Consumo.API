// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // Expón el servidor para que sea accesible desde cualquier dirección
    port: process.env.PORT || 3000,  // Usa el puerto proporcionado por Render
  },
  build: {
    outDir: 'dist'  // Asegúrate de que el directorio de salida sea "dist"
  }
});
