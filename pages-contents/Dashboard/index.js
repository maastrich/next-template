import React, { useEffect } from "react";
import Router from 'next/router'
import Cookie from 'js-cookie'
import { useSnackbar } from 'notistack'

export default function LandingPage(props) {
	const [didMount, setDidMount] = React.useState(false);
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const handleVariant = (variant) => (message) => {
		enqueueSnackbar(message, { variant });
	};

	useEffect(() => {
		if (!didMount) {
			if (typeof window !== 'undefined') {
				if (!Cookie.get("token"))
					Router.push({
						pathname: '/signin',
						query: { error: 'You must sign in before access to dashboard' }
					});
			}
			handleQuery(Router.query);
			setDidMount(true);
		}
	}, []);

	const handleQuery = (query) => {
		if (query) {
			if (typeof query.error !== 'undefined')
				handleVariant('error')(query.error)
			if (typeof query.message !== 'undefined')
				handleVariant('success')(query.message);
		}
	}
	return (
		<div />
	);
}
