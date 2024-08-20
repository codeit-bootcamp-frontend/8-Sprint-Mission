import { colors } from '@/f_shared/config';
import styled from 'styled-components';

export type BtnImgSize = 'default' | 'small';

interface ButtonProps {
  $size: BtnImgSize;
}

export const ButtonLabel = styled.label<ButtonProps>`
  width: ${({ $size }) => ($size === 'small' ? '10.5rem' : '17.625rem')};
  height: ${({ $size }) => ($size === 'small' ? '10.5rem' : '17.625rem')};
  padding: ${({ $size }) =>
    $size === 'small' ? '2.62rem 2.94rem' : '6.13rem 6.5rem'};
  flex-shrink: 0;
  border: none;

  border-radius: 12px;
  background-color: ${colors.secondary[200]};
  cursor: pointer;

  &:hover {
    background-color: ${colors.secondary[800]};
  }
`;

export const ButtonLabelContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

export const ButtonText = styled.p`
  color: ${colors.coolGray[400]};

  /* pretendard/lg-16px-regular */
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.625rem; /* 162.5% */
`;

export const HiddenInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  border: 0;
`;
