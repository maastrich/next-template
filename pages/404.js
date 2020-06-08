/**
 * Creating a page named _error.js lets you override HTTP error messages
 */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Container } from 'reactstrap'
import Styles from 'assets/scss/index.scss'
import { withRouter } from 'next/router'
import Router from 'next/router'

class ErrorPage extends React.Component {

    static propTypes() {
        return {
            errorCode: React.PropTypes.number.isRequired,
            url: React.PropTypes.string.isRequired
        }
    }


    render() {
        var response
        response = (
            <div>
                <Head>
                    <style dangerouslySetInnerHTML={{ __html: Styles }} />
                </Head>
                <Container className="pt-5 text-center">
                    <h1 className="display-4"><strong>Page Not Found</strong></h1>
                    <p>The page you asked does not <strong>exist</strong>.</p>
                    <p><Link href="/"><a>Home</a></Link></p>
                </Container>
            </div>
        )

        return response
    }

}

export default withRouter(ErrorPage)