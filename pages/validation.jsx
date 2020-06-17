import React from "react";
import Validation from 'pages-contents/Validation'
import { PageProvider } from 'components/Providers'

export default function ValidationProvider(props) {
    return (
        <PageProvider.Form pageName="Email Validation">
            <Validation {...props} />
        </PageProvider.Form>
    )
}
