import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import { Card, Modal, Grid } from 'components'
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import PropTypes from 'prop-types'
//import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import Signup from "./inputs"
import fetcher from 'fetch'

import styles from "assets/jss/pages/FormPage";

import { useSnackbar } from 'notistack'
import Router from "next/router";

const useStyles = makeStyles(styles);

function SignupForms(props) {
	const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
	const [inputs, setInputs] = React.useState([]);
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const { complete } = props;

	const handleVariant = (variant) => (message) => {
		enqueueSnackbar(message, { variant });
	};

	const handleChange = variable => newValue => {
		setInputs({ ...inputs, [variable]: newValue });
	}

	const onClick = async () => {
		let res = await fetcher.signup(inputs);
		let resBody = await res.json();
		if (res.status === 409) {
			handleVariant("error")(resBody.error);
			console.error(resBody.error);
			setTimeout(function () {
				Router.reload();
			}, 2500);
			return;
		}
		else if (res.status !== 200) {
			handleVariant("error")("An error occured, please try again in a few minutes !!");
			console.error(resBody.error);
			return;
		}
		handleVariant("success")(resBody.message);
		complete(inputs["mail"]);
	}

	setTimeout(function () {
		setCardAnimation("");
	}, 700);
	const classes = useStyles();
	return (
		<GridContainer justify="center">
			<GridItem xs={12} sm={6} md={4}>
				<Card className={classes[cardAnimaton]}>
					<form className={classes.form}>
						<CardHeader color="primary" className={classes.cardHeader}>
							<h4>Signup</h4>
						</CardHeader>
						<CardBody>
							<Signup
								onChange={handleChange}
							/>
						</CardBody>
					</form>
				</Card>
			</GridItem>
		</GridContainer>
	);
}

export default function SignupForm(props) {
	const classes = useStyles();
	const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
	const [inputs, setInputs] = React.useState([]);
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const { complete } = props;

	const handleVariant = (variant) => (message) => {
		enqueueSnackbar(message, { variant });
	};

	const handleChange = variable => value => {
		setInputs({ ...inputs, [variable]: value })
	}
	setTimeout(function () {
		setCardAnimation("");
	}, 700);

	const onClick = async () => {
		let res = await fetcher.signup(inputs);
		let resBody = await res.json();
		switch (res.status) {
			case 200:
				handleVariant("success")(resBody.message);
				complete(inputs["mail"]);
				break;
			case 409:
				handleVariant("error")(resBody.error);
				console.error(resBody.error);
				break;
			default:
				handleVariant("error")("An error occured, please try again in a few minutes !!");
				console.error(resBody.error);
				break;
		}
	}

	const handleQuery = () => {
	}

	return (
		<Grid.Container justify='center'>
			<Grid.Item xs={8}>
				<Card.Container className={classes[cardAnimaton]}>
					<form className={classes.form} noValidate autoComplete="on">
						<Card.Header color="primary" className={classes.cardHeader}><h2>Signup</h2></Card.Header>
						<Card.Body>
							<Signup onChange={handleChange} onSubmit={onClick}/>
						</Card.Body>
					</form>
				</Card.Container>
			</Grid.Item>
		</Grid.Container>
	)
}

SignupForm.propTypes = {
	complete: PropTypes.func.isRequired
}