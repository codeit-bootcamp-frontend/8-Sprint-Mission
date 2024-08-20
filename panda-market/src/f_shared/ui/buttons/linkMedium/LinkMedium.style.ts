import { colors } from '@/f_shared/config';
import styled from 'styled-components';

export const LinkButton = styled.div`
  display: flex;
  width: 15rem;
  height: 3rem;
  padding: 0.75rem 4.4375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;

  border-radius: 30px;
  background-color: ${colors.primary[100]};

  color: ${colors.coolGray[100]};
  text-align: center;
  white-space: nowrap;

  /* pretendard/2lg-18px-semibold */
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.625rem; /* 144.444% */

  &:hover {
    background-color: ${colors.primary[200]};
  }

  &:active {
    background-color: ${colors.primary[300]};
  }

  &:disabled {
    background-color: ${colors.secondary[400]};
  }
`;
