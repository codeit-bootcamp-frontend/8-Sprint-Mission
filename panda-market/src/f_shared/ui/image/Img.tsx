import Image from 'next/image';
import { useEffect, useState } from 'react';
import { match } from 'ts-pattern';

import DefaultLargeImg from '@/f_shared/assets/images/default_item/default_large.png';

type ImageErrorType = { type: 'success' } | { type: 'default' };

interface ImgProps {
  src: string;
  alt: string;
}

export const Img = ({ src, alt }: ImgProps) => {
  const [isError, setIsError] = useState<boolean>(() => src === '' || !src);
  const imageErrorType: ImageErrorType = {
    type: !isError ? 'success' : 'default',
  };

  const ImgContent = match(imageErrorType)
    .with({ type: 'success' }, () => (
      <Image src={src} alt={alt} onError={() => setIsError(true)} fill />
    ))
    .with({ type: 'default' }, () => (
      <Image src={DefaultLargeImg} alt={alt} fill />
    ))
    .exhaustive();
  return <>{ImgContent}</>;
};
