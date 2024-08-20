import { colors } from '@/f_shared';
import styled from 'styled-components';

export const DefaultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 2.5rem;
`;

export const DefaultContentContainer = styled.div`
  display: flex;
  width: 9.4375rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const DefaultImageContainer = styled.div`
  width: 8.75rem;
  height: 8.75rem;
`;

export const DefaultText = styled.p`
  color: ${colors.secondary[400]};
  text-align: center;

  /* pretendard/lg-16px-regular */
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.625rem; /* 162.5% */
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;
