const webpack = require("webpack")

const path = require("path")

module.exports = {
  entry: {
		main: "./index.web.js",
	},
	module: {
		rules: [{
			test: /\.js?$/,
			include: [
				path.resolve(__dirname, "index.web.js")
			],
			exclude: [
				path.resolve(__dirname, "node_modules")
			],

			loader: "babel",
			options: {
				presets: ["es2015"]
			},

			issuer: /\.css$/,
			issuer: path.resolve(__dirname, "app"),
			issuer: { and: [ /\.css$/, path.resolve(__dirname, "app") ] },
			issuer: { or: [ /\.css$/, path.resolve(__dirname, "app") ] },
			issuer: { not: [ /\.css$/ ] },
			issuer: [ /\.css$/, path.resolve(__dirname, "app") ],
		}]
	},
	resolve: {
		alias: {
			'react-native': 'react-native-web',
		},
	},
};
