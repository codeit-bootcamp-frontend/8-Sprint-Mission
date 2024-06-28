import styled, { css } from 'styled-components';
import { StyledTitleText } from 'styles/market/textStyles';

export const StyledAddItemSubTitle = styled.label`
  ${StyledTitleText};
  /* margin-bottom 처리하기 위한 block 변환 */
  display: inline-block;
  font-size: 1.8rem;
  line-height: 2.148rem;
  margin-bottom: 1.2rem;
`;

export const smallTextStyle = css`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`;
