import Image from 'next/image';
import { useEffect, useState } from 'react';
import { match } from 'ts-pattern';

import DefaultLargeImg from '@/f_shared/assets/images/default_item/default_large.png';

type ImageErrorType = { type: 'success' } | { type: 'default' };

interface ImgProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const Img = ({ src, alt, width, height }: ImgProps) => {
  const [isError, setIsError] = useState<boolean>(() => src === '' || !src);
  const imageErrorType: ImageErrorType = {
    type: !isError ? 'success' : 'default',
  };

  const ImgContent = match(imageErrorType)
    .with({ type: 'success' }, () => (
      <Image
        src={src}
        alt={alt}
        onError={() => setIsError(true)}
        fill
        width={width}
        height={height}
      />
    ))
    .with({ type: 'default' }, () => (
      <Image
        src={DefaultLargeImg}
        alt={alt}
        fill
        width={width}
        height={height}
      />
    ))
    .exhaustive();
  return <>{ImgContent}</>;
};
