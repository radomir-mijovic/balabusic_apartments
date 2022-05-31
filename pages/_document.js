import Document, {Main, Head, Html, NextScript} from "next/document";
import {ServerStyleSheet} from 'styled-components'
import React from "react";

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    {/*<link rel="shortcut icon" href="/assets/logo/rakia.svg"/>*/}
                    {/*<link rel="canonical" href="https://www.rakiaandwinebar.com/"/>*/}
                    {/*<link rel="preconnect" href="https://fonts.googleapis.com"/>*/}
                    {/*<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>*/}

                    <meta name="keywords" content="apartments, balabusic, budva, apartmani, smjestaj"/>
                    <meta name='description'
                          content='Discover a dreamy spot in the heart of Old
                                   Town Budva and create authentic memories with us. Rakija and Wine bar
                                   - Budva. Rakija i Vino bar - Budva.'/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App {...props} />),
        })

    const initialProps = await Document.getInitialProps(ctx)
    return {
        ...initialProps,
        styles: (
            <>
                {initialProps.styles}
                {sheet.getStyleElement()}
            </>
        ),
    }

}

export default MyDocument;