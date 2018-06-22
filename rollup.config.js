import buble from 'rollup-plugin-buble';
import path from 'path';
import resolve from '@seregpie/rollup-plugin-resolve';
import {uglify} from 'rollup-plugin-uglify';

import {main} from './package.json';

let globals = {
	'paperduck': 'PaperDuck',
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
		buble(),
		uglify(),
	],
};