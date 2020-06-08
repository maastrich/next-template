const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");
const path = require("path");

module.exports = withPlugins([[withSass], [withImages]], {
	webpack(config, options) {
		config.resolve.modules.push(path.resolve("./"));
		return config;
	},
	env: {
		adress: 'http://127.0.0.1:3000',
		api: 'http://127.0.0.1:8000/api/',
		color: 'ligth'
	},
});