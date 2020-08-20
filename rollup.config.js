import { terser } from 'rollup-plugin-terser';

export default {
	input: 'src/index.js',
	output: [
		{
			file: 'packages/await-fn/src/index.mjs',
			format: 'esm',
		},
		{
			file: 'packages/await-fn/src/index.cjs',
			format: 'cjs',
		},
		{
			name: 'to',
			file: 'packages/await-fn/src/index.umd.js',
			format: 'umd',
		},
	],
	plugins: [terser()],
};
