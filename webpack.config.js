const path = require('path');

const cjsConfig = {
	target: 'node',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'packages/await-fn.cjs/src/'),
		filename: 'index.js',
		library: 'to',
		libraryTarget: 'commonjs2',
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.m?js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env', { modules: 'cjs' }]],
						plugins: ['@babel/plugin-proposal-object-rest-spread'],
					},
				},
			},
		],
	},
};

const umdConfig = {
	target: 'web',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'packages/await-fn.umd/src/'),
		filename: 'index.js',
		library: 'to',
		libraryTarget: 'umd',
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.m?js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env', { modules: 'umd' }]],
						plugins: ['@babel/plugin-proposal-object-rest-spread'],
					},
				},
			},
		],
	},
};

module.exports = [cjsConfig, umdConfig];
