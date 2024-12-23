const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	resolve: {
		alias: {
			'@src': path.resolve(__dirname, 'src')
		}
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/, // Target .scss files
				use: [
					MiniCssExtractPlugin.loader, // Extracts CSS to separate files
					'css-loader', // Translates CSS into CommonJS
					{
						loader: 'postcss-loader', // Processes CSS with PostCSS plugins
						options: {
							postcssOptions: {
								plugins: [
									require('autoprefixer'),
									require('postcss-calc')({
										warnWhenCannotResolve: true // Warns instead of errors on calc issues
									})
								]
							}
						}
					},
					'sass-loader' // Compiles SCSS to CSS
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: 'styles.css' }) // Extracts CSS to file
	],
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		port: 4200,
    open: true
	}
};
