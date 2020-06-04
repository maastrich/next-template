import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/nextjs-material-kit/pages/loginPage.js";



const useStyles = makeStyles(styles);

export default function RedirectSignin(props) {
    const classes = useStyles();
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");

    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    return (
        <GridContainer justify="center">
            <GridItem xs={12} sm={6} md={4}>
                <Card className={classes[cardAnimaton]}>
                    <form className={classes.form}>
                        <CardHeader color="primary" className={classes.cardHeader}>
                            <h4>You've Sign Up</h4>
                        </CardHeader>
                        <CardBody>
                            A verification link has been sent to your {props.mail}, please, check it out before signing in ;)
                    </CardBody>
                        <CardFooter className={classes.cardFooter}>
                            <Button color="primary" onClick={() => { Router.push('/signin') }}>
                                Now Sign In
                    </Button>
                        </CardFooter>
                    </form>
                </Card>
            </GridItem>
        </GridContainer>
    )
}