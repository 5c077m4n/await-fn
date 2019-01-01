const path = require('path');


module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.bundle.js'
	},
	mode: 'production',
	target: 'node'
};
