import { colors } from '@/f_shared/config';
import styled from 'styled-components';

interface WrapperProps {
  $isOpen: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  z-index: 100;
  background-color: rgba(2, 2, 2, 0.6);
`;

export const ContentContainer = styled.div`
  width: 40rem;
  height: 20rem;
  padding: 1.5rem 3rem;

  border-radius: 12px;
  background-color: ${colors.white};
`;

export const Content = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85%;

  color: ${colors.secondary[800]};

  /* pretendard/lg-16px-regular */
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.625rem; /* 162.5% */
`;

export const BtnContainer = styled.div`
  display: flex;
  padding-top: 0.5rem;
  border-radius: 10px;
`;
