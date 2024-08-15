import { colors } from '@/f_shared/config';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

interface ErrorMessageProps {
  $isValid: boolean;
}

export const ErrorMessage = styled.p<ErrorMessageProps>`
  visibility: ${({ $isValid }) => ($isValid ? 'hidden' : 'visible')};

  color: ${colors.error};

  /* pretendard/lg-14px-semibold */
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; /* 171.429% */
`;
