import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import PageChange from "components/PageChange";

if (process.env.color === 'dark')
	require('assets/css/dark.scss');
else
	require('assets/css/light.scss');



Router.events.on("routeChangeStart", url => {
	console.log(`Loading: ${url}`);
	document.body.classList.add("body-page-transition");
	const index =  url.indexOf('?');
	const subUrl = url.substring(0, index);
	ReactDOM.render(
		<PageChange path={subUrl.length ? subUrl : url} />,
		document.getElementById("page-transition")
	);
});
Router.events.on("routeChangeComplete", () => {
	ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
	document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
	ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
	document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}
	componentDidMount() {
	}
	render() {
		const { Component } = this.props;
		return (
				<React.Fragment>
					<Head>
						<title>Template Next Js</title>
						<meta name="description" content="Template made with love by Maastrich"></meta>
					</Head>
					<Component />
				</React.Fragment>
		);
	}
}
