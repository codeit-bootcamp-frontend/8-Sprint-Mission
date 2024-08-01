import { css, MediaQueryType, MediaQueryValueType } from "styled-components";

export const breakpoints = {
  mobile: "@media (max-width: 767px)",
  tablet: "@media (max-width: 1119px)",
};

const arr = Object.entries(breakpoints);

const media = arr.reduce<MediaQueryType>((acc, [key, value]) => {
  const nextValue: MediaQueryValueType = (first, ...interpolations) => css`
    ${value} {
      ${css(first, ...interpolations)}
    }
  `;
  return {
    ...acc,
    [key]: nextValue,
  };
}, {} as MediaQueryType);

export default media;
