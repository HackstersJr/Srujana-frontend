import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true, // Allow hosting on the local network
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'square-leopard-communal.ngrok-free.app'
    ]
  },
});
