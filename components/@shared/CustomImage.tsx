import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';

interface ImageProps {
  src: StaticImageData;
  alt: string;
  width?: string;
  height?: string;
  radius?: string;
  className?: string;
  aspectRatio?: string;
  onClick?: () => void;
}

function CustomImage({
  src,
  alt,
  width = 'auto',
  height = 'auto',
  radius,
  className,
  onClick,
  aspectRatio,
}: ImageProps) {
  const imageWrapperStyle = {
    width,
    height,
  };

  const imageStyle = {
    borderRadius: radius || '',
    aspectRatio: aspectRatio || '',
  };

  return (
    <div style={imageWrapperStyle}>
      <Image
        src={src}
        alt={alt}
        style={imageStyle}
        className={classNames(className)}
        onClick={onClick}
      />
    </div>
  );
}

export default CustomImage;
