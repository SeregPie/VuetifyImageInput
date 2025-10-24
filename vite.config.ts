import vue from '@vitejs/plugin-vue';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {defineConfig} from 'vite';

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: join(currentDir, './src/demo'),
  plugins: [vue()],
  publicDir: false,
  server: {
    open: true,
  },
  build: {
    outDir: join(currentDir, './docs'),
    emptyOutDir: true,
  },
});
