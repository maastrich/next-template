import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import styles from 'assets/jss/components/MainDiv'
import PageChange from "components/PageChange";
import { makeStyles } from "@material-ui/core";
switch (process.env.colors) {
	case 'dark':
		require('assets/css/dark.scss');
		break;
	default:
		require('assets/css/light.scss');
		break;
}

const useStyles = makeStyles(styles);

//import "assets/scss/nextjs-material-kit.scss?v=1.0.0";
function Container(props) {
	const classes = useStyles();
	return (
		<div className={classes.background}>
			{props.child}
		</div>
	)
}

Router.events.on("routeChangeStart", url => {
	console.log(`Loading: ${url}`);
	document.body.classList.add("body-page-transition");
	ReactDOM.render(
		<PageChange path={url} />,
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
			<Container child={
				<React.Fragment>
					<Head>
						<title>Template Next Js</title>
						<meta name="description" content="Template made with love by Maastrich"></meta>
					</Head>
					<Component />
				</React.Fragment>}
			/>
		);
	}
}
