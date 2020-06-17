import React from "react";
import { PageProvider } from 'components/Providers'
import Landing from 'pages-contents/Landing'

export default function LandingProvider(props) {
  return (
    <PageProvider.Empty pageName="Landing">
      <Landing/>
    </PageProvider.Empty>
  )
}
