import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002,
    watch: {
      usePolling: true,
    },
    host:'0.0.0.0',
  },
})
