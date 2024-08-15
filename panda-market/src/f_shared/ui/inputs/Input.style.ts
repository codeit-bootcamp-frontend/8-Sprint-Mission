import { colors } from '@/f_shared/config';
import styled from 'styled-components';

interface InputProps {
  $isValid: boolean;
}

export const Input = styled.input<InputProps>`
  display: flex;
  width: 100%;
  height: 3.5rem;
  padding: 1rem 1.5rem;
  align-items: flex-start;
  gap: 0.625rem;
  border: ${({ $isValid }) =>
    $isValid ? 'none' : `1px solid ${colors.error}`};

  border-radius: 12px;
  background-color: ${colors.coolGray[100]};
  color: ${colors.secondary[800]};

  &::placeholder {
    color: ${colors.secondary[400]};

    /* pretendard/lg-16px-regular */
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.625rem; /* 162.5% */
  }
`;
