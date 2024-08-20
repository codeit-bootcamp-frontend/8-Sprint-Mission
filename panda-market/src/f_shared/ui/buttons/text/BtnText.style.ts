import { colors } from '@/f_shared/config';
import styled from 'styled-components';

interface TextButtonProps {
  $textColor: string;
}

export const TextButton = styled.button<TextButtonProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;

  color: ${({ $textColor }) => $textColor};

  /* pretendard/lg-16px-semibold */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.625rem; /* 162.5% */

  &:hover {
    background-color: ${colors.coolGray[50]};
    border-radius: 10px;
  }
`;
