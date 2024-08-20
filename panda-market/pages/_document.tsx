import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
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
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta property="og:title" content="판다마켓" />
          <meta
            property="og:description"
            content="일상의 모든 물건을 거래해보세요"
          />
          <meta
            property="og:image"
            content="source/images/headline/Img_home_top.png"
          />
          <meta property="og:url" content="https://storepanda.netlify.app" />

          <meta property="twitter:title" content="판다마켓" />
          <meta
            property="twitter:description"
            content="일상의 모든 물건을 거래해보세요"
          />
          <meta
            property="twitter:image"
            content="source/images/headline/Img_home_top.png"
          />
          <meta
            property="twitter:url"
            content="https://storepanda.netlify.app"
          />
          <meta property="twitter:card" content="summary" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
