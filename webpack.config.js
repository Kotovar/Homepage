const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/main.html',
			chunks: ['main'],
		}),
		new HtmlWebpackPlugin({
			filename: 'about.html',
			template: './src/about.html',
			chunks: ['main'],
		}),
		new HtmlWebpackPlugin({
			filename: 'projects.html',
			template: './src/projects.html',
			chunks: ['main'],
		}),
		new CopyPlugin({
			patterns: [
				{from: 'img', to: 'img'}, // копирует папку img в папку dist
			],
		}),
	],
	devtool: 'inline-source-map',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		clean: {
			keep: /css\//,
		},
	},
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
