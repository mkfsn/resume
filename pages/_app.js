import '../styles/global.css'
import React from 'react'
import App from 'next/app'
import { appWithTranslation } from '../i18n'

// This default export is required in a new `pages/_app.js` file.
class MyApp extends App {
    // https://github.com/isaachinman/next-i18next/issues/528
    // This will run on initial load & on route changes
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {} // This is how pages will get their own getinitialprops
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        // If a page does not have namespacesRequired set, add one in with an empty array
        /* we could also just check if pageProps.i18n exists, if it exists it means the page is wrapped with the withTranslation() HOC.
           But in the case where the withTranslation() HOC is declared and namespacesRequired is not set, we still dont want all namespaces to be loaded. */
        if (!pageProps.namespacesRequired) {
            pageProps.namespacesRequired = []
        }
        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />
    }
}

export default appWithTranslation(MyApp)