import { colors } from '@/f_shared/config';
import styled from 'styled-components';

export type LikeBtnSize = 'small' | 'large';

interface ButtonProps {
  $size: LikeBtnSize;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  height: ${({ $size }) => ($size === 'large' ? '2.5rem' : '2rem')};
  padding: 0.25rem 0.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  flex-shrink: 0;

  border-radius: 35px;
  border: 1px solid ${colors.secondary[200]};
  background-color: ${colors.white};
`;

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const ButtonContentIcon = styled.div<ButtonProps>`
  width: ${({ $size }) => ($size === 'large' ? '2rem' : '1.5rem')};
  height: ${({ $size }) => ($size === 'large' ? '2rem' : '1.5rem')};
`;

export const ButtonContentText = styled.p`
  color: ${colors.coolGray[500]};

  /* pretendard/lg-16px-medium */
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.625rem; /* 162.5% */
`;
