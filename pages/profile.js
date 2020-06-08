import React from "react";
import Profile from 'pages-contents/Profile'
import { PageProvider } from 'components/Providers'

export default function ProfileProvider(props) {
    return (
        <PageProvider.Empty pageName="Sign In">
            <Profile {...props} />
        </PageProvider.Empty>
    )
}