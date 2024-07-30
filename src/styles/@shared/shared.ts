import { MOBILE_MAX_WIDTH } from ' constants/information/mediaQuerySize';
import { css } from 'styled-components';

export const commonContainerStyle = css`
  height: 100%;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;

  padding: 2.4rem;
  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    padding: 1.6rem;
  }
`;
