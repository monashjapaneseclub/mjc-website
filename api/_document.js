import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="js-focus-visible">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&family=M+PLUS+1p:wght@400;500;700;800&family=M+PLUS+2:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:wght@500&family=Source+Sans+3:ital,wght@0,600;1,900&display=swap"
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

export default MyDocument;
