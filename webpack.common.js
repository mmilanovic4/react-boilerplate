module.exports = {
	entry: {
		app: './src/index.jsx',
		dependencies: [
			'@babel/polyfill',
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
			// Images
			{
				test: /\.(jpg|jpeg|png|gif|webp)$/,
				use: 'file-loader'
			},
			// Fonts
			{
				test: /\.(eot|otf|svg|ttf|woff|woff2)$/,
				use: 'file-loader'
			}
		]
	}
};
