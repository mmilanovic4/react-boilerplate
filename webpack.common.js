module.exports = {
	entry: {
		app: [
			'core-js/stable',
			'regenerator-runtime/runtime',
			'./src/index.js'
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/public/assets',
		publicPath: 'assets/'
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
				use: {
					loader: 'file-loader',
					options: {
						name: 'img/[name].[ext]'
					}
				}
			},
			// Fonts
			{
				test: /\.(eot|otf|svg|ttf|woff|woff2)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'fonts/[name].[ext]'
					}
				}
			}
		]
	}
};
