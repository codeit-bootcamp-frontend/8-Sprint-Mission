import styled from 'styled-components';

interface WrapperProps {
  $width: string;
  $height: string;
}

export const Wrapper = styled.div<WrapperProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  flex-shrink: 0;
`;
