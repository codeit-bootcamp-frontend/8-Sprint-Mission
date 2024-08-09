"use client";

// App router기반의 Next.js에서 styled-components를 사용할 때,
// 서버사이드 렌더링(SSR)과 클라이언트사이드 렌더링(CSR) 간의 스타일 불일치를 해결

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // ServerStyleSheet는 styled-components에서 SSR을 지원하기 위해 사용
  // → 서버에서 스타일을 수집하고 클라이언트로 전달
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  // useServerInsertedHTML 훅은 Next.js에서 SSR시 HTML에 스타일을 삽입하는데 사용
  // → 서버에서 수집된 스타일을 HTML에 삽입
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  // typeof window !== "undefined"를 사용하여 클라이언트와 서버를 구분
  // → 클라이언트에서는 스타일 시트를 직접 사용하고, 서버에서는 StyleSheetManager를 사용하여 스타일 관리
  if (typeof window !== "undefined") return <>{children}</>;

  // StyleSheetManager는 styled-components에서 스타일 시트를 관리하는 컴포넌트
  // → 서버에서 수집된 스타일 시트를 클라이언트로 전달
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
