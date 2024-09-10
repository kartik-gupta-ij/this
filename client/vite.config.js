import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  build: {
    rollupOptions: {
      // external: ['xlsx', 'react-chartjs-2', 'chart.js'],
    },
  },
  server: {
    proxy: {
      '/api': {
        target: "https://sadhana-h2ch.onrender.com/api",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
