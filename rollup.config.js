import {terser} from 'rollup-plugin-terser';
import buble from '@rollup/plugin-buble';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';

import {main} from './package.json';

let plugins = [
	resolve(),
	buble({objectAssign: 'Object.assign'}),
	terser(),
];

if (process.env.ROLLUP_WATCH) {
	plugins.push(serve({
		contentBase: '',
		open: true,
	}));
}

export default {
	input: 'src/index.js',
	plugins,
	output: {
		file: main,
		format: 'umd',
		name: 'VuetifyImageInput',
	},
};
