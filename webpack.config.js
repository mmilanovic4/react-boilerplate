const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = (env) => {
	const isDev = env?.dev === true;

	return {
		mode: isDev ? 'development' : 'production',
		watch: isDev,
		entry: {
			index: [
				'core-js/stable',
				'regenerator-runtime/runtime',
				'./src/client/index.js',
				'./src/client/style.css'
			]
		},
		resolve: {
			extensions: ['.js', '.jsx'],
			alias: {
				Client: path.resolve(__dirname, 'src', 'client')
			}
		},
		output: {
			path: path.resolve(__dirname, 'dist', 'assets'),
			publicPath: 'assets/',
			filename: '[name].js'
		},
		module: {
			rules: [
				// Babel
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react'],
							plugins: ['@babel/plugin-proposal-class-properties']
						}
					}
				},
				// CSS
				{
					test: /\.css$/,
					use: [
						isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
						'css-loader'
					]
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: 'style.css',
				chunkFilename: '[id].css'
			}),
			new CopyPlugin({
				patterns: [
					{
						from: path.resolve(__dirname, 'html'),
						to: path.resolve(__dirname, 'dist')
					},
					{
						from: path.resolve(__dirname, 'static'),
						to: path.resolve(__dirname, 'dist', 'static')
					}
				]
			})
		],
		optimization: {
			minimize: !isDev,
			minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin({})]
		}
	};
};
