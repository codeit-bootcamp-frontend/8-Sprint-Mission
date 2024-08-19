import Image from 'next/image';
import { useState } from 'react';
import { match } from 'ts-pattern';

import DefaultLargeImg from '@/f_shared/assets/images/default_item/default_large.png';
import DefaultProfileImg from '@/f_shared/assets/images/ic_profile/ic_profile@2x.png';

type ImgUseType = 'item' | 'profile';
type ImageErrorType = { type: 'success' } | { type: 'default' };
type ImageType = { type: 'item' } | { type: 'profile' };

interface ImgProps {
  src?: string;
  alt: string;
  imgType: ImgUseType;
}

export const Img = ({ src = '', alt, imgType }: ImgProps) => {
  const [isError, setIsError] = useState<boolean>(() => src === '' || !src);
  const imageErrorType: ImageErrorType = {
    type: !isError ? 'success' : 'default',
  };
  const imageType: ImageType = {
    type: imgType,
  };
  const ImgType = match(imageType)
    .with({ type: 'profile' }, () => (
      <Image src={DefaultProfileImg} alt={alt} fill />
    ))
    .with({ type: 'item' }, () => (
      <Image src={DefaultLargeImg} alt={alt} fill />
    ))
    .exhaustive();

  const ImgContent = match(imageErrorType)
    .with({ type: 'success' }, () => (
      <Image src={src ?? ''} alt={alt} onError={() => setIsError(true)} fill />
    ))
    .with({ type: 'default' }, () => <>{ImgType}</>)
    .exhaustive();

  return <>{ImgContent}</>;
};
