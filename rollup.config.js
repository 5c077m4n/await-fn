import { terser } from 'rollup-plugin-terser';

export default {
	input: 'src/index.js',
	output: [
		{
			dir: 'packages/await-fn.cjs/src/',
			format: 'cjs',
		},
		{
			name: 'to',
			dir: 'packages/await-fn.umd/src/',
			format: 'umd',
		},
	],
	plugins: [terser()],
};
