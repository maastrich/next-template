import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Lock from '@material-ui/icons/VpnKey';
// core components
import { Header } from "components";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "@material-ui/core/Button";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "assets/jss/nextjs-material-kit/pages/loginPage.js";
import Router from "next/router";
import fetcher from 'fetch'
import Cookie from 'js-cookie'
import { useSnackbar } from 'notistack'

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    const [identifiant, setId] = React.useState(null);
    const [password, setPassword] = React.useState(null);
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
                handleVariant('success')(resBody.message);
                Cookie.set("token", resBody.accessToken);
                setTimeout(function () {
                    Router.push('/dashbord');
                }, 2500);
                break;
            case 401:
            case 403:
            case 404:
                handleVariant('error')(resBody.error);
                setTimeout(function () {
                    Router.reload();
                }, 3000);
                break;
            default:
                handleVariant('error')('Something happened, please try again in few minutes..');
                setTimeout(function () {
                    Router.reload();
                }, 3000);
                break;
        }

    }

    setTimeout(function () {
        setCardAnimation("");
    }, 700);

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
                            <Button color="primary" onClick={onClickSignin}>
                                Sign in
                                    </Button>
                        </CardFooter>
                    </form>
                </Card>
            </GridItem>
        </GridContainer>
    );
}
