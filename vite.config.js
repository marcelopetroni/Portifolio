import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'vite-plugin-sass';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sass()], 
  build: {
    rollupOptions: {
      external: ['/src/styles/footer.sass', "/src/styles/card.sass", "/src/styles/home.sass", "/src/styles/header.sass"], 
    },
  },
})
