import React from 'react'
import { SnackbarProvider } from 'notistack'
import { Header } from "components";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/nextjs-material-kit/pages/loginPage.js";

const useStyles = makeStyles(styles);


function PageProvider(props) {
    const classes = useStyles();
    return (
        <SnackbarProvider maxSnack={3} anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}>
            <Header
                pageName={props.pageName}
            />
            <div className={classes.container} style={{ textAlign: 'center' }}>
                {props.children}
            </div>
        </SnackbarProvider>
    )
}
export {
    PageProvider
}