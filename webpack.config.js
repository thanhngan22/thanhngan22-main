const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.(ts)x?$/,
				exclude: /node_modules|\.d\.ts$/,
				use: {
					loader: 'ts-loader',
					options: {
						compilerOptions: {
							noEmit: false,
						},
					},
				},
			},
			{
				test: /\.json$/,
				use: 'json-loader',
			},
			{
				test: /\.(js)x?$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: true,
						},
					},
					{ loader: 'sass-loader' },
				],
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
	devServer: {
		contentBase: './dist',
		port: 3000,
	},
};
