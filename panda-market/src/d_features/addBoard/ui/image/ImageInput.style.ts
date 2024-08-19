import { BtnImgSize } from '@/f_shared';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;
interface PreviewProps {
  $size: BtnImgSize;
}

export const PreviewContainer = styled.div<PreviewProps>`
  position: relative;
  width: ${({ $size }) => ($size === 'small' ? '10.5rem' : '17.625rem')};
  height: ${({ $size }) => ($size === 'small' ? '10.5rem' : '17.625rem')};
  cursor: pointer;
`;

export const EmptyPreview = styled.div<PreviewProps>`
  visibility: hidden;
  width: ${({ $size }) => ($size === 'small' ? '10.5rem' : '17.625rem')};
  height: ${({ $size }) => ($size === 'small' ? '10.5rem' : '17.625rem')};
`;

export const Preview = styled.img`
  border-radius: 12px;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 3%;
  right: 3%;
  cursor: pointer;
`;
