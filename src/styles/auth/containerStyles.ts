import { MEDIA_QUERY_SIZE } from ' constants/information/mediaQuerySize';
import styled from 'styled-components';

export const StyledAuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 64rem;
  margin: 6rem auto 0;

  @media ${MEDIA_QUERY_SIZE.mobile} {
    box-sizing: content-box;
    padding: 0 16px;
    max-width: 400px;
  }
`;

export const StyledAuthMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  width: 100%;
`;
