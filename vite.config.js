import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgr({exportAsDefault: true})],
  define: {
    'process.env': {}
  },
  // root: 'src',
  // build: {
  //     outDir: '../dist'
  // },
  server: {
    port: 8000,
    maxSessionMemory: 100
  }
});