// 종화 : svg, png 파일이 import되지 않아 svg, png 파일을 모듈로 선언
declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}
