import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
//import Card from "components/Card/Card";
import { Card, Grid } from 'components'
import Button from "@material-ui/core/Button";
import Router from 'next/router'
import fetcher from 'fetch'

import styles from "assets/jss/pages/FormPage";
import { StylesContext } from "@material-ui/styles";


const useStyles = makeStyles(styles);

export default function RedirectSignin(props) {
    const classes = useStyles();
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    const [buttonText, setButtonText] = React.useState(null);
    const [text, setText] = React.useState(null);
    const [method, setMethod] = React.useState(null);

    const getResponse = async () => {
        const query = Router.query
        const res = await fetcher.validation(query.id);
        switch (res.status) {
            case 200:
                setButtonText('Let\'s sign in');
                setText('Email successfully validated');
                setMethod(onClickSignIn);
                setCardAnimation("");
                break;
            default:
                setButtonText('Get me back to signup');
                setText('An error occured try again later..');
                setMethod(onClickError);
                setCardAnimation("");
                break;
        }
    }

    const onClickError = () => {
        Router.push('/signup');
    }

    const onClickSignIn = () => {
        Router.push('/signin');
    }

    getResponse();
    return (
        <Grid.Container justify="center">
            <Grid.Item xs={12} sm={6} md={4}>
                <Card.Container className={classes[cardAnimaton]}>
                    <form className={classes.form}>
                        <Card.Header color="primary" className={classes.cardHeader}>
                            <h4>Email</h4>
                        </Card.Header>
                        <Card.Body>
                            {text}
                    </Card.Body>
                        <Card.Footer className={classes.cardFooter}>
                            <Button color="primary" onClick={method}>
                                {buttonText}
                            </Button>
                        </Card.Footer>
                    </form>
                </Card.Container>
            </Grid.Item>
        </Grid.Container>
    )
}