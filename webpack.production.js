const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExctractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackCommon = require('./webpack.common');

module.exports = merge(webpackCommon, {
	mode: 'production',
	output: {
		filename: '[name].[contentHash].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [ new MiniCssExctractPlugin({ filename: 'css/[name].[hash].css' }), new CleanWebpackPlugin() ],

	module: {
		rules: [
			{
				test: /\.(sass|scss)$/,
				use: [ MiniCssExctractPlugin.loader, 'css-loader', 'sass-loader' ]
			}
		]
	}
});
