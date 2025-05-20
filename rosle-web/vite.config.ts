import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { VitePluginRadar } from 'vite-plugin-radar'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    VitePluginRadar({ 
      analytics: {
        id: 'G-LDZEXV1C8G'
      },
      enableDev: false
    })
  ],
  server: {
    host: true
  }
})
