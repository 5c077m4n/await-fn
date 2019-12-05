const path = require('path');

const cjsConfig = {
	target: 'node',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'to.cjs.bundle.js',
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
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-object-rest-spread'],
					},
				},
			},
		],
	},
};

const esmConfig = {
	target: 'node',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'to.esm.bundle.js',
		library: 'to',
		libraryTarget: 'commonjs-module',
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.m?js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
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
		path: path.resolve(__dirname, 'dist'),
		filename: 'to.umd.bundle.js',
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
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-object-rest-spread'],
					},
				},
			},
		],
	},
};

module.exports = [cjsConfig, esmConfig, umdConfig];
