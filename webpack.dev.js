const path = require('path');
const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');

module.exports = merge(webpackCommon, {
	mode: 'development',

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		inline: false,
		contentBase: './dist'
	},
	plugins: [],

	module: {
		rules: [
			{
				test: /\.(sass|scss)$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			}
		]
	}
});
