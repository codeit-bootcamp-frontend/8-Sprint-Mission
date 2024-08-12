import styled from 'styled-components';
import { colors, sizeTheme } from '../../config/styles';

export const Title = styled.h1`
  color: ${colors.secondary[900]};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media ${sizeTheme.mobile} {
    color: ${colors.secondary[800]};

    /* pretendard/2lg-18px-bold */
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.625rem; /* 144.444% */
  }
`;
