import styled from 'styled-components';

interface ImageProps {
  src: string;
  alt: string;
  width: string;
  height: string;
  radius?: string;
  className?: string;
  aspectRatio?: string;
  onClick?: () => void;
}

function Image({ src, alt, width, height, radius, className, onClick, aspectRatio }: ImageProps) {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      radius={radius || ''}
      className={className || ''}
      $aspectRatio={aspectRatio || ''}
      onClick={onClick}
    />
  );
}

export default Image;
const StyledImage = styled.img<{ width: string; height: string; radius?: string; $aspectRatio?: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => radius || ''};
  object-fit: cover;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio || ''};
`;
