import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'vite-plugin-sass';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sass()], 
  build: {
    rollupOptions: {
      external: ['/src/styles/footer.sass'], // Adicione o caminho correto
    },
  },
})
