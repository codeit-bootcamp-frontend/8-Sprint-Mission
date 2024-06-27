import styled, { css } from 'styled-components';

export const StyledTitleText = css`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.8rem;
  letter-spacing: 0.2rem;
  color: var(--cool-gray-900);
`;

export const StyledProductCategoryText = styled.p`
  ${StyledTitleText}
`;
