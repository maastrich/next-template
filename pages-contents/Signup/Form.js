import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Signup from "components/Register"
import fetcher from 'fetch'

import styles from "assets/jss/nextjs-material-kit/pages/loginPage.js";


import { useSnackbar } from 'notistack'
import Router from "next/router";

const useStyles = makeStyles(styles);

export default function SignupForm(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    const [inputs, setInputs] = React.useState([]);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleVariant = (variant) => (message) => {
        enqueueSnackbar(message, { variant });
    };

    const handleChange = data => (value) => {
        let datas = inputs;
        datas[data] = value;
        setInputs(datas);
    }

    const setLast = async () => {
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
        props.complete(inputs["mail"]);
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
                                setLast={setLast}
                                onChange={handleChange}
                            />
                        </CardBody>
                    </form>
                </Card>
            </GridItem>
        </GridContainer>
    );
}
