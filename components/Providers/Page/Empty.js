import React from 'react'
import { SnackbarProvider } from 'notistack'
import { Header } from "components";

function PageProvider(props) {
    return (
        <SnackbarProvider maxSnack={3} anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}>
            <Header
                pageName={props.pageName}
            />
            <div style={{ textAlign: 'center' }}>
                {props.children}
            </div>
        </SnackbarProvider>
    )
}
export default PageProvider;
