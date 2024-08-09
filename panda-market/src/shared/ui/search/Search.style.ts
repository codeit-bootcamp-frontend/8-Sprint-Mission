import { colors } from '@/shared/config';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  display: flex;
  padding: 0.56rem 1.25rem 0.56rem 2.75rem;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;

  min-width: 20.3125rem;
  border-radius: 12px;
  background: ${colors.secondary[100]};
  border: none;

  color: ${colors.secondary[800]};

  /* pretendard/lg-16px-regular */
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.625rem; /* 162.5% */

  &::placeholder {
    color: ${colors.secondary[400]};
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 1rem;
  top: 0.56rem;
  bottom: 0.56rem;
  width: 1.5rem;
  height: 1.5rem;
`;
