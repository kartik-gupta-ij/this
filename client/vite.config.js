import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  build: {
    rollupOptions: {
      // external: ['xlsx', 'react-chartjs-2', 'chart.js'],
    },
  },
  server: {
    host: '0.0.0.0', 
    port: 5173, 
    proxy: {
      '/api': {
        target: "https://sadhana-h2ch.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
