import { colors } from '@/f_shared';
import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  align-self: stretch;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  gap: 0.5625rem;
`;

export const Label = styled.label`
  color: ${colors.coolGray[900]};

  /* pretendard/lg-16px-semibold */
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.625rem; /* 162.5% */
`;
