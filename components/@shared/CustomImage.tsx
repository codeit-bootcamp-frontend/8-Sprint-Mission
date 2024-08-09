import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';

interface ImageProps {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  radius?: number;
  aspectRatio?: number;
  className?: string;
  priority?: boolean;
  onClick?: () => void;
}

function CustomImage({
  src,
  alt,
  width,
  height,
  radius,
  className,
  onClick,
  aspectRatio,
  priority,
}: ImageProps) {
  const imageStyle = {
    borderRadius: `${radius}px` || '',
    aspectRatio: `${aspectRatio}` || '',
  };

  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      style={imageStyle}
      className={classNames(className)}
      onClick={onClick}
      priority={priority}
    />
  );
}

export default CustomImage;
