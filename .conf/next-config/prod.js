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
		adress: 'http://mydomain.com',			// Website adress			--- do not forget to setup the correct port
		admin: 'http://admin.mydomain.com',		// Admin website adress		--- do not forget to setup the correct port
		api: 'http://mydomain.com'				// Api adress and port		--- do not forget to setup the correct port
	},
});