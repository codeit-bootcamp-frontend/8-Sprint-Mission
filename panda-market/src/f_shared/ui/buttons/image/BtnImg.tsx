import { UseFormRegisterReturn } from 'react-hook-form';

import PlusIcon from '@/f_shared/assets/icons/ic_plus/ic_plus.svg';

import * as S from './BtnImg.style';

interface BtnImgProps {
  id: string;
  size?: S.BtnImgSize;
  register: UseFormRegisterReturn;
}

export const BtnImg = ({ id, size = 'default', register }: BtnImgProps) => {
  return (
    <>
      <S.ButtonLabel $size={size} htmlFor={id}>
        <S.ButtonLabelContent>
          <PlusIcon />
          <S.ButtonText>이미지 등록</S.ButtonText>
        </S.ButtonLabelContent>
      </S.ButtonLabel>
      <S.HiddenInput
        {...register}
        type="file"
        id={id}
        accept="image/png, image/jpg, image/jpeg"
      />
    </>
  );
};
