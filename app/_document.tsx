// pages router기반의 Next.js에서 styled-components를 사용할 때,
// 서버사이드 렌더링(SSR)과 클라이언트사이드 렌더링(CSR) 간의 스타일 불일치를 해결
// (공부용) 해당 코드는 App router를 사용한 지금의 프로젝트에서는 작동하지 않지만, 공부를 위해 남겨둠

import Document, { DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  // getInitialProps 메서드는 Next.js에서 페이지가 서버사이드 렌더링될 때 호출
  // 서버에서 스타일을 수집하고 초기 props를 설정
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    // ServerStyleSheet는 styled-components에서 SSR을 지원하기 위해 사용
    // → 서버에서 스타일을 수집하고 클라이언트로 전달
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // renderPage 메서드는 페이지를 렌더링하는 함수
      // enhanceApp 옵션을 사용하여 styled-components의 스타일을 수집
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            // sheet.collectStyles 메서드를 사용하여 styled-components의 스타일을 수집
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        // sheet.getStyleElement 메서드를 사용하여 수집된 스타일을 HTML에 주입
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
}
