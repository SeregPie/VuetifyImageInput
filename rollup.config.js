import {terser} from 'rollup-plugin-terser';
import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';

import {main} from './package.json';

let globals = {
	'vueclaw': 'VueClaw',
};

export default {
	external: Object.keys(globals),
	input: 'src/index.js',
	plugins: [
		resolve(),
		...(process.env.ROLLUP_WATCH
			? [serve({
				contentBase: '',
				open: true,
			})]
			: [
				buble({objectAssign: 'Object.assign'}),
				terser(),
			]
		),
	],
	output: {
		file: main,
		format: 'umd',
		name: 'VuetifyImageInput',
		globals,
	},
};
