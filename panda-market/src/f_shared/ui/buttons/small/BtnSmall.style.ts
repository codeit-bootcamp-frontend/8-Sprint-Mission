import { colors } from '@/f_shared/config';
import styled from 'styled-components';

interface ButtonProps {
  $size: string;
  $color: string;
  $bgColor: string;
  $border: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  width: 5.5rem;
  height: ${({ $size }) => ($size === '40' ? '2.625rem' : '3rem')};
  padding: '0.75rem 1.4375rem';
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  background-color: ${({ $bgColor }) => $bgColor};
  color: ${({ $color }) => $color};

  /* pretendard/lg-16px-semibold */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.625rem; /* 162.5% */

  border-radius: 8px;
  border: ${({ $border }) => $border};
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary[200]};
  }

  &:active {
    background-color: ${colors.primary[300]};
  }

  &:disabled {
    background-color: ${colors.coolGray[400]};
    cursor: inherit;
  }
`;
