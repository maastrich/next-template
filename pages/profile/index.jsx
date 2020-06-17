import React from "react";
//import Profile from 'pages-contents/Profile'
import { PageProvider } from 'components/Providers'

import dynamic from 'next/dynamic'

const Profile = dynamic(() =>
    import('pages-contents/Profile'),
    { ssr: false }
)

export default function ProfileProvider(props) {
    return (
        <PageProvider.Empty pageName="Profile">
            <Profile {...props} />
        </PageProvider.Empty>
    )
}