import { useState } from 'react';
import { match } from 'ts-pattern';

import { usePreview } from '../../lib';
import { BtnImgSize, BtnImg, Label } from '@/f_shared';
// import { BtnImg, Label } from '@/f_shared/ui';

import XIcon from '@/f_shared/assets/icons/ic_x/ic_X.svg';

import * as S from './ImageInput.style';
import {
  FieldValues,
  UseFormRegisterReturn,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';

interface PreviewProps {
  preview?: string;
  size: BtnImgSize;
  onDelete: () => void;
}

type PreviewType = { type: 'empty' } | { type: 'file' };

const Preview = ({ preview = '', size, onDelete }: PreviewProps) => {
  return (
    <S.PreviewContainer $size={size} onClick={onDelete}>
      <S.Preview
        src={preview}
        alt="이미지 입력 미리보기"
        width={size === 'small' ? 168 : 282}
        height={size === 'small' ? 168 : 282}
      />
      <S.IconContainer>
        <XIcon />
      </S.IconContainer>
    </S.PreviewContainer>
  );
};

const PreviewContents = ({ preview = '', size, onDelete }: PreviewProps) => {
  const previewType: PreviewType = {
    type: preview.length > 0 ? 'file' : 'empty',
  };
  const PreviewContent = match(previewType)
    .with({ type: 'empty' }, () => (
      <S.EmptyPreview $size={size}></S.EmptyPreview>
    ))
    .with({ type: 'file' }, () => (
      <Preview preview={preview} size={size} onDelete={onDelete} />
    ))
    .exhaustive();
  return <>{PreviewContent}</>;
};

interface ImageInputProps {
  register: UseFormRegisterReturn;
  watch: UseFormWatch<FieldValues>;
  name: string;
  // setValue: UseFormSetValue<FieldValues>;
  // value: File | null;
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
}

export const ImageInput = ({
  register,
  onDelete,
  watch,
  name,
}: ImageInputProps) => {
  const [size, setSize] = useState<BtnImgSize>('default');
  const value = watch(name);
  const { preview } = usePreview({ value });

  return (
    <S.Wrapper>
      <Label htmlFor="itemImage">이미지</Label>
      <S.ImageContainer>
        <BtnImg id={name} size={size} register={register} />
        <PreviewContents preview={preview} size={size} onDelete={onDelete} />
      </S.ImageContainer>
    </S.Wrapper>
  );
};
