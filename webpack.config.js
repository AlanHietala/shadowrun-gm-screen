var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './app/js/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
		publicPath : '/'
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loaders: ['react-hot', 'babel'],
				exclude: /node_modules/,
				include: __dirname
			},
			{
				test: /\.css$/,
				loaders: [
					'style',
					'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
					'postcss',
				],
			},
			{
				test: /\.scss$/,
				loaders: [
					'style',
					'css?modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]',
					'postcss',
					'sass',
				],
			},
			{
				test: /\.(woff2?|ttf|eot|svg)$/,
				loaders: [ 'url?limit=10000' ],
			},
		]
	},
	devServer: {
		historyApiFallback: true,
		host: '0.0.0.0'
	},
	devtool: 'source-map',
	plugins: [
		new webpack.NoErrorsPlugin()
	]
};
