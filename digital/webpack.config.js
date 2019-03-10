const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
	path: path.resolve(__dirname, 'dist'),
	filename: 'bundle.js'
	},
	module: {
		  rules: [
				{
				  test: /\.scss$/,
				  use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				  })
				},
				{
					test: /\.(png|jpg|jpeg|svg|gif)$/,
					loader: "file-loader?name=src/img/[name].[ext]"
				},
			    {
			    	test: /\.(eot|svg|ttf|woff|woff2)$/,
					loader: 'file-loader?name=src/fonts/[name].[ext]'
			    }
		  ]
	},
	plugins: [
		new ExtractTextPlugin('style.css')
	]
};