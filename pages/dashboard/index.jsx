import React from "react";
import { PageProvider } from 'components/Providers'
import Dashboard from 'pages-contents/Dashboard'

export default function DashboardProvider(props) {
  return (
    <PageProvider.Empty pageName="Dashboard">
      <Dashboard/>
    </PageProvider.Empty>
  )
}
