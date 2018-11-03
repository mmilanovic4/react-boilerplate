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
				use: 'babel-loader',
				exclude: /node_modules/
			},
			// CSS
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
		},
		]
	},

	devServer: {
		contentBase: __dirname + '/public',
		port: 8000
	},

	watch: true

};
