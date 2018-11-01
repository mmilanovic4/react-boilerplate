module.exports = {

	mode: 'development',

	entry: {
		app: './src/index.js'
	},

	resolve: {
		extensions: ['.js', '.jsx']
	},

	output: {
		filename: '[name].js',
		path: __dirname + '/public'
	},

	module: {
		rules: [
			// Babel
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},

	devServer: {
		contentBase: __dirname + '/public',
		port: 8000
	},

	watch: true

};
