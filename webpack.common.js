const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: './src/main.ts',
		vendor: './src/vendor.ts'
	},
	resolve: {
		extensions: [ '.js', '.jsx', '.ts', '.tsx' ]
	},

	plugins: [
		new HtmlWebpackPlugin({
			filename: './html/home.html',
			template: './src/html/home.html',
			minify: {
				collapseWhitespace: true,
				removeComments: true
			}
		}),
		new HtmlWebpackPlugin({
			filename: './html/product.html',
			template: './src/html/product.html',
			minify: {
				collapseWhitespace: true,
				removeComments: true
			}
		})
	],

	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				include: [ path.resolve(__dirname, 'src') ]
			},
			{
				test: /\.html$/,
				use: [ 'html-loader' ]
			},
			{
				test: /\.(jpe?g|png|svg|gif)$/i,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'images',
						publicPath: '../images'
					}
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'font',
						publicPath: '../font'
					}
				}
			}
		]
	}
};
