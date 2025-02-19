import {defineConfig} from 'vite';

export default defineConfig({
	publicDir: false,
	plugins: [
		(async () => {
			const plugin = await import('@vitejs/plugin-vue').then((v) => v.default);
			return plugin();
		})(),
		(async () => {
			const plugin = await import('vite-tsconfig-paths').then((v) => v.default);
			return plugin();
		})(),
	],
	server: {
		open: true,
	},
	build: {
		outDir: './docs',
	},
});
