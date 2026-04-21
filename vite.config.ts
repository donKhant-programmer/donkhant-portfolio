import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    // This tells Vite to automatically use the paths from your tsconfig.json
    tsconfigPaths: true 
  }
})
