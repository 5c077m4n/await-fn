const path = require('path');


const nodeConfig = {
	target: 'node',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'to.bundle.js',
		library: 'to',
		libraryTarget: 'commonjs2'
	},
	mode: 'production',
	module: {
		rules: [{
			test: /\.m?js$/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
					plugins: ['@babel/plugin-proposal-object-rest-spread']
				}
			}
		}]
	}
};

const webConfig = {
	target: 'web',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'to.web.bundle.js',
		library: 'to',
		libraryTarget: 'umd'
	},
	mode: 'production',
	module: {
		rules: [{
			test: /\.m?js$/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
					plugins: ['@babel/plugin-proposal-object-rest-spread']
				}
			}
		}]
	}
};


module.exports = [nodeConfig, webConfig];
