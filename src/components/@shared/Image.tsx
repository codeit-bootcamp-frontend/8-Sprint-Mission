import styled from 'styled-components';

interface ImageProps {
  src: string;
  alt: string;
  width: string;
  height: string;
  radius?: string;
  className?: string;
  onClick?: () => void;
}

function Image({ src, alt, width, height, radius, className, onClick }: ImageProps) {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      radius={radius || ''}
      className={className || ''}
      onClick={onClick}
    />
  );
}

export default Image;
const StyledImage = styled.img<{ width: string; height: string; radius?: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => radius || ''};
  object-fit: cover;
`;
