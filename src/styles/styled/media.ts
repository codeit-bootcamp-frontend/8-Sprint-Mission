import { css, MediaQueryType } from "styled-components";

export const breakpoints = {
  mobile: "@media (max-width: 767px)",
  tablet: "@media (max-width: 1199px)",
};

const arr = Object.entries(breakpoints);

const media = arr.reduce<MediaQueryType>((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (first, ...interpolations) => css`
      ${value} {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {} as MediaQueryType);

export default media;
