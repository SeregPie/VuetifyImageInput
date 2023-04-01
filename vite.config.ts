import vue from '@vitejs/plugin-vue';
import {defineConfig} from 'vite';

export default defineConfig({
	resolve: {
		alias: [{find: '@', replacement: '/src'}],
	},
	plugins: [vue()],
});
