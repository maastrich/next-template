import React from "react";
import Profile from 'pages-contents/Profile'
import { PageProvider } from 'components/Providers'

export default function ProfileProvider(props) {
    return (
        <PageProvider.Empty pageName="Profile">
            <Profile {...props} />
        </PageProvider.Empty>
    )
}