const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = env => {
	const isProd = (env && env.prod) === true;

	return {
		mode: isProd ? 'production' : 'development',
		watch: !isProd,
		entry: {
			app: [
				'core-js/stable',
				'regenerator-runtime/runtime',
				'./src/client/index.js'
			]
		},
		resolve: {
			extensions: ['.js', '.jsx'],
			alias: {
				Client: path.resolve(__dirname, 'src', 'client')
			}
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'dist', 'assets'),
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
		},
		plugins: [
			new CopyPlugin([
				{
					from: path.resolve(__dirname, 'html'),
					to: path.resolve(__dirname, 'dist')
				},
				{
					from: path.resolve(__dirname, 'static'),
					to: path.resolve(__dirname, 'dist', 'static')
				}
			])
		]
	};
};
