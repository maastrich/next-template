import React from "react";
import { SnackbarProvider } from 'notistack';
import { Header } from 'components'
import Router from 'next/router'
import Cookie from 'js-cookie'

export default function LandingPage(props) {
	// code to run on component mount
	if (typeof window !== 'undefined')
		if (!Cookie.get("token"))
			Router.push('/signin');
	return (
		<SnackbarProvider maxSnack={3} anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}>
			<Header pageName='Dashbord' />
		</SnackbarProvider>

	);
}
