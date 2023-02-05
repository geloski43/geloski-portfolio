import glsl from 'vite-plugin-glsl';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react(), glsl()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
      },
    },
    commonjsOptions: {
      exclude: ['ckeditor/*'],
    },
  },
  esbuild: {
    define: {
      this: 'window',
    },
  },
});
