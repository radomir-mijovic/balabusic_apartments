import Document, { Main, Head, Html, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import React from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="keywords"
            content="apartments, balabusic, budva, apartmani, smjestaj, apartments budva, apartments"
          />
          <meta
            name="description"
            content="amazing apartments for the free spirited traveler."
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Balabusic Apartments" />
          <meta
            property="og:description"
            content="Amazing apartments for the free spirited traveler. Apartments Balabusic are not designed as simple accommodation for travelers but is designed to mix with space of modern and sensible design, culture, art and entertainment. One of our main goals is to make sure that your trip and experience is enjoyable."
          />
          <meta
            property="og:image"
            content="https://www.balabusic.com/og-image.jpg"
          />
          <meta property="og:url" content="https://www.balabusic.com" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,200;0,300;1,200;1,300&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        {sheet.getStyleElement()}
      </>
    ),
  };
};

export default MyDocument;
