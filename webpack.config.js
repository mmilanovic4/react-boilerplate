const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env) => {
	const isProd = (env && env.prod) === true;

	return {
		mode: isProd ? 'production' : 'development',
		watch: !isProd,
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
					use: 'babel-loader',
					exclude: /node_modules/
				},
				// CSS
				{
					test: /\.css$/,
					use: [
						isProd ? MiniCssExtractPlugin.loader : 'style-loader',
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
			minimize: isProd,
			minimizer: isProd
				? [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
				: []
		}
	};
};
