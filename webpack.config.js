const path = require('path');


const nodeConfig = {
	target: 'node',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'to.bundle.js'
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
		filename: 'to.bundle.js'
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
