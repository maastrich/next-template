import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Lock from '@material-ui/icons/VpnKey';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "@material-ui/core/Button";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Router from "next/router";
import fetcher from 'fetch'
import Cookie from 'js-cookie'
import { useSnackbar } from 'notistack'
import styles from "assets/jss/pages/FormPage";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
	const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
	const [identifiant, setId] = React.useState(null);
	const [didMount, setDidMount] = React.useState(false);
	const [password, setPassword] = React.useState(null);
	const [query, setQuery] = React.useState(null)
	const classes = useStyles();
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	const onChangePass = event => {
		setPassword(event.target.value);
	}

	const onChangeId = event => {
		setId(event.target.value);
	}

	const handleVariant = (variant) => (message) => {
		enqueueSnackbar(message, { variant });
	};

	const onClickSignin = async () => {
		const res = await fetcher.signin(identifiant, password);
		const resBody = await res.json();
		switch (res.status) {
			case 200:
				Cookie.set("token", resBody.accessToken);
				Router.push({
					pathname: '/dashbord',
					query: { message: resBody.message }
				});
				break;
			case 401:
			case 403:
			case 404:
				window.location.href = '/signin?error=' + resBody.error
				break;
			default:
				window.location.href = '/signin?error=Something happened, please try again in few minutes..';
				break;
		}
	}

	useEffect(() => {
		if (!didMount) {
			handleQuery(Router.query);
			setDidMount(true);
		}
	}, []);

	const handleQuery = (query) => {
		if (query) {
			if (typeof query.error !== 'undefined')
				handleVariant('error')(query.error)
			setQuery(null);
		}
	}

	setTimeout(function () {
		setCardAnimation("");
	}, 300);

	return (
		<GridContainer justify="center">
			<GridItem xs={12} sm={6} md={4}>
				<Card className={classes[cardAnimaton]}>
					<form className={classes.form}>
						<CardHeader color="primary" className={classes.cardHeader}>
							<h4>Sign In</h4>
						</CardHeader>
						<CardBody>
							<CustomInput
								labelText="Email or Username"
								id="email"
								formControlProps={{
									fullWidth: true,
									onChange: onChangeId
								}}
								inputProps={{
									type: "username",
									endAdornment: (
										<InputAdornment position="end">
											<People className={classes.inputIconsColor} />
										</InputAdornment>
									)
								}}
							/>
							<CustomInput
								labelText="Password"
								id="pass"
								formControlProps={{
									onChange: onChangePass,
									fullWidth: true
								}}
								inputProps={{
									type: "password",
									endAdornment: (
										<InputAdornment position="end">
											<Lock className={classes.inputIconsColor} />
										</InputAdornment>
									),
									autoComplete: "off"
								}}
							/>
						</CardBody>
						<CardFooter className={classes.cardFooter}>
							<Button color="primary" onClick={onClickSignin}>Sign in</Button>
						</CardFooter>
					</form>
				</Card>
			</GridItem>
		</GridContainer>
	);
}
