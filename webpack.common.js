module.exports = {
	entry: {
		app: [
			'@babel/polyfill',
			'./src/index.js'
		]
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
			// Fonts
			{
				test: /\.(eot|otf|svg|ttf|woff2?)$/,
				use: 'file-loader'
			}
		]
	}
};
