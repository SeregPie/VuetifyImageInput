import {defineConfig} from 'vite';

export default defineConfig({
	plugins: [
		(async () => {
			let plugin = (await import('vite-tsconfig-paths')).default;
			return plugin();
		})(),
		(async () => {
			let plugin = (await import('@vitejs/plugin-vue')).default;
			return plugin();
		})(),
	],
	publicDir: false,
	server: {
		open: true,
	},
	build: {
		outDir: './docs',
	},
});
