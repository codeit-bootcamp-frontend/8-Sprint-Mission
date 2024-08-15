import { colors } from '@/f_shared/config';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

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

export const Content = styled.p``;

export const BtnContainer = styled.div``;
