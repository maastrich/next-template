import React from "react";
import Signup from 'pages-contents/Signup'
import { PageProvider } from 'components/Providers'

export default function SignupProvider(props) {
    return (
        <PageProvider pageName="Sign Up">
            <Signup {...props}/>
        </PageProvider>
    )
}
