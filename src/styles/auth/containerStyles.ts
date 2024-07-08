import { MOBILE_MAX_WIDTH } from ' constants/infomations/mediaQuerySize';
import styled from 'styled-components';

export const StyledAuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 64rem;
  margin: 6rem auto 0;

  @media all and (max-width: ${MOBILE_MAX_WIDTH}px) {
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
