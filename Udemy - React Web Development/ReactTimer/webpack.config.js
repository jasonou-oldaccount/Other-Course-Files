var webpack = require('webpack');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'
	],
	externals: {
		jQuery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jQuery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			Main: 'app/components/Main.jsx',

			Nav: 'app/components/Nav.jsx',

			Timer: 'app/components/Timer.jsx',
			Countdown: 'app/components/Countdown.jsx',
			CountdownForm: 'app/components/CountdownForm.jsx',

			Clock: 'app/components/Clock.jsx',

			Controls: 'app/components/Controls.jsx',

			applicationStyles: 'app/styles/app.scss'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: '#eval-source-map'
};