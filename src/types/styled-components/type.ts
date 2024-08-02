import { Interpolation, RuleSet, Styles } from "styled-components/dist/types";
import { theme } from "src/styles/styled/theme/theme";

declare module "styled-components" {
  export type ThemeContextType = typeof theme;
  export interface BoxProps {
    mt?: number;
    mb?: number;
    ml?: number;
    mr?: number;
    pt?: number;
    pb?: number;
    pl?: number;
    pr?: number;
    width?: number;
    height?: number;
  }
  export interface FlexProps extends BoxProps {
    flex?: string;
    content?: string;
    item?: string;
    wrap?: string;
    gap?: number;
    grow?: number;
  }
  export type MediaQueryValueType = (
    first: Styles<object>,
    ...interpolations: Interpolation<object>[]
  ) => RuleSet<object>;
  export interface MediaQueryType {
    [key: string]: MediaQueryValueType;
  }
}
