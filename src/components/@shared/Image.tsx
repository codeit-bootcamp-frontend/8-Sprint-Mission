import { SyntheticEvent } from 'react';
import styled from 'styled-components';
import noImage from 'assets/images/@shared/no-image-placeholder.png';

interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  radius?: string;
  className?: string;
  aspectRatio?: string;
  onClick?: () => void;
}

function Image({ src, alt, width = 'auto', height = 'auto', radius, className, onClick, aspectRatio }: ImageProps) {
  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).src = noImage;
  };

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
      onError={handleImageError}
    />
  );
}

export default Image;
const StyledImage = styled.img<{ width: string; height: string; radius?: string; $aspectRatio?: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => radius || ''};
  object-fit: cover;
  object-position: center;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio || ''};
`;
