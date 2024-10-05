import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa'; // Import the Vite PWA plugin

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
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',  // Automatically update service worker
      manifest: {
        name: 'My Vite PWA',
        short_name: 'VitePWA',
        description: 'A Progressive Web App built with Vite and React',
        theme_color: '#ffffff',   // Customize based on your app's color scheme
        background_color: '#ffffff', // Customize background color
        display: 'standalone',    // Ensure it runs standalone (like an app)
        start_url: '/',           // Define the start URL
        icons: [
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true, // Automatically clean outdated caches
        sourcemap: true,             // Helpful for debugging
      },
    }),
  ],
});
