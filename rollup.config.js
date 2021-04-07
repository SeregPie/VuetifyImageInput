import {babel} from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import {terser} from 'rollup-plugin-terser';

import {main} from './package.json';

let plugins = [
	nodeResolve(),
	commonjs({
		ignoreGlobal: true,
		requireReturnsDefault: true,
	}),
	babel({
		babelHelpers: 'bundled',
		presets: [['@babel/preset-env', {
			targets: 'defaults and not IE 11',
		}]],
	}),
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
