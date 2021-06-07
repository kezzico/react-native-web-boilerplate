const webpack = require('webpack');

module.exports = {
  entry: {
		main: './index.web.js',
	},
	module: {
	#loaders are depr3cated
	#replaced by rules
		loaders: [{
			test: /\.js?$/,
			exclude: /node_modules/,

			loader: 'babel',
				query: {
					presets: ['es2015', 'react'],
				},
			},
		],
	},
	resolve: {
		alias: {
			'react-native': 'react-native-web',
		},
	},
};
