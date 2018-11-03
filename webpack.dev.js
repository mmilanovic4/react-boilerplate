const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		contentBase: __dirname + '/public',
		port: 8000
	},
	watch: true
});
