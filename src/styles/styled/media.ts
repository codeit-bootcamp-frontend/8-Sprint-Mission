import { css } from "styled-components";

export const breakpoints = {
  mobile: "@media (max-width: 767px)",
  tablet: "@media (max-width: 1119px)",
};

const media = Object.entries(breakpoints).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (first, ...interpolations) => css`
      ${value} {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {});

export default media;
