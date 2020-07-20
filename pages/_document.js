import Document, { Html, Head, Main, NextScript } from 'next/document';

import { Fragment } from 'react';

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        // Check if in production
        const isProduction = process.env.NODE_ENV === 'production';
        const initialProps = await Document.getInitialProps(ctx);
        // Pass isProduction flag back through props
        return { ...initialProps, isProduction };
    }

    setGoogleTags() {
        return {
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-124207676-2');
            `
        }
    }

    render() {
        const { isProduction } = this.props;
        return (
            <Html>
                <Head/>
                <body>
                    <Main/>
                    <NextScript/>
                    {
                        /* We only want to add the scripts if in production */
                        isProduction && (
                            <Fragment>
                                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-124207676-2"></script>
                                <script dangerouslySetInnerHTML={this.setGoogleTags()} />
                            </Fragment>
                        )
                    }
                </body>
            </Html>
        )
    }
}

export default MyDocument