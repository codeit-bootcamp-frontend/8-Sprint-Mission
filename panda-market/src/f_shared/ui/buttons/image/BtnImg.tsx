import { useRef } from 'react';

import PlusIcon from '@/f_shared/assets/icons/ic_plus/ic_plus.svg';

import * as S from './BtnImg.style';

interface BtnImgProps {
  size?: S.BtnImgSize;
}

export const BtnImg = ({ size = 'default' }: BtnImgProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.click();
  };

  return (
    <>
      <S.Button $size={size}>
        <S.ButtonContent onClick={handleClick}>
          <PlusIcon />
          <S.ButtonText>이미지 등록</S.ButtonText>
        </S.ButtonContent>
      </S.Button>
      <S.HiddenInput
        type="file"
        accept="image/png, image/jpg, image/jpeg"
        ref={inputRef}
      />
    </>
  );
};
