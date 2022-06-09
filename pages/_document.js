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

                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,200;0,300;1,200;1,300&display=swap"
                        rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400&display=swap" rel="stylesheet"/>
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