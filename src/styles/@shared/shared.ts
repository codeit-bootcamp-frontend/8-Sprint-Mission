import { css } from 'styled-components';

export const commonContainerStyle = css`
  height: 100%;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;

  padding: 0 2.4rem;
  @media (max-width: 768px) {
    padding: 0 1.6rem;
  }
`;
