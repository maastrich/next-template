import React from "react";
import { SnackbarProvider } from 'notistack';
import { Header } from 'components'

export default function LandingPage(props) {
  return (

    <SnackbarProvider maxSnack={3} anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}>
      <Header pageName='Landing' />
    </SnackbarProvider>

  );
}
