import { useState } from 'react';
import { match } from 'ts-pattern';

import { usePreview } from '../../lib';
import { BtnImgSize } from '@/f_shared/ui/';
import { BtnImg, Label } from '@/f_shared/ui';

import XIcon from '@/f_shared/assets/icons/ic_x/ic_X.svg';

import * as S from './ImageInput.style';

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
  value: File | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
}

export const ImageInput = ({ value, onChange, onDelete }: ImageInputProps) => {
  const [size, setSize] = useState<BtnImgSize>('default');
  const { preview } = usePreview({ value });

  return (
    <S.Wrapper>
      <Label htmlFor="image">이미지</Label>
      <S.ImageContainer>
        <BtnImg size={size} onChange={onChange} id="image" name="image" />
        <PreviewContents preview={preview} size={size} onDelete={onDelete} />
      </S.ImageContainer>
    </S.Wrapper>
  );
};
