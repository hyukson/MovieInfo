import React from "react";

import Document, {
  Html,
  Main,
  Head,
  NextScript,
  DocumentContext,
} from "next/document";

import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  // styled-components 사용하기 위해
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
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
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <title>MovieInfo</title>
          <meta
            name="description"
            content="다양한 영화 정보를 공유, 추천 받는 사이트입니다."
          />
          <meta property="og:title" content="MovieInfo" />
          <meta
            property="og:description"
            content="다양한 영화 정보를 공유, 추천 받는 사이트입니다."
          />
          <meta property="og:image" content="/logo.png" />
          <meta property="og:image:alt" content="MovieInfo Logo" />

          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
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
