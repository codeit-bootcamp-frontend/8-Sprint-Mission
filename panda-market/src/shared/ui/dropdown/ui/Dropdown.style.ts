import styled from 'styled-components';
import { colors } from '@/shared/config';

export const Wrapper = styled.div`
  position: relative;
`;

export const DownBtn = styled.button`
  display: flex;
  padding: 0.75rem 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;

  border-radius: 12px;
  border: 1px solid ${colors.coolGray[200]};
  background-color: ${colors.white};

  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  flex: 1 0 0;
  align-self: stretch;
`;

export const Title = styled.p`
  color: ${colors.secondary[800]};

  /* pretendard/lg-16px-regular */
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.625rem; /* 162.5% */
`;

export const IconWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

interface ContentWrapperProps {
  $isOpen: boolean;
}

export const ContentsWrapper = styled.div<ContentWrapperProps>`
  position: absolute;
  top: 110%;
  display: flex;
  width: 8.125rem;
  flex-direction: column;
  align-items: flex-start;
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};

  border-radius: 12px;
  border: 1px solid ${colors.coolGray[200]};
  background-color: ${colors.white};
`;

interface ContentProps {
  $isLast: boolean;
}

export const Content = styled.p<ContentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.125rem;
  height: 2.625rem;
  flex-shrink: 0;
  cursor: pointer;
  border-bottom: ${({ $isLast }) =>
    $isLast ? 'none' : `1px solid ${colors.coolGray[200]}`};

  &:hover {
    background-color: ${colors.secondary[200]};
    border-radius: 12px;
  }
`;
