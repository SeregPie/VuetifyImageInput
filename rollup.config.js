import {terser} from 'rollup-plugin-terser';
import buble from 'rollup-plugin-buble';
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';

import {main} from './package.json';

let globals = {
	'vueclaw': 'VueClaw',
};

export default {
	input: 'src/index.js',
	external: Object.keys(globals),
	output: {
		file: main,
		format: 'umd',
		name: path.basename(main, path.extname(main)),
		globals,
	},
	plugins: [
		resolve(),
		buble({objectAssign: 'Object.assign'}),
		terser(),
	],
};
