import { ImageWrapper } from './Logo.style';
import Image, { StaticImageData } from 'next/image';

interface LargeLogoProps {
  width?: number;
  height?: number;
  logoImage: StaticImageData;
}

export const LargeLogo = ({ width, height, logoImage }: LargeLogoProps) => {
  return (
    <ImageWrapper>
      <Image
        src={logoImage}
        alt="메인 로고"
        width={width}
        height={height}
        priority={true}
      />
    </ImageWrapper>
  );
};
