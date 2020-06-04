import React from "react";
import Signin from 'pages-contents/Signin'
import { PageProvider } from 'components/Providers'

export default function SignupProvider(props) {
    return (
        <PageProvider pageName="Sign In">
            <Signin {...props} />
        </PageProvider>
    )
}
