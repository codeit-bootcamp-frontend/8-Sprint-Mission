import { MEDIA_QUERY_SIZE } from ' constants/information/mediaQuerySize';
import { css } from 'styled-components';

export const commonContainerStyle = css`
  height: 100%;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;

  padding: 2.4rem;
  @media ${MEDIA_QUERY_SIZE.mobile} {
    padding: 1.6rem;
  }
`;
