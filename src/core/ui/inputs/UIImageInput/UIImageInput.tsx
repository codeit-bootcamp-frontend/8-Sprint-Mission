import styles from './UIImageInput.module.scss';

import { BasicType } from '@type/BasicTypes';
import { useEffect, useRef, useState } from 'react';
import { OptionalPick } from '@lib/utils/OptionalPick';
import IconX from '@assets/images/icons/ic_x.svg';
import IconUnion from '@assets/images/icons/ic_plus.svg';
import UIImage from '@core/ui/UIImage/UIImage';
import Image from 'next/image';
import clsx from 'clsx';

type UIImageInputProps = OptionalPick<
  BasicType,
  'className' | 'initialPreview' | 'file' | 'name',
  'onChangeFile'
>;

const UIImageInput = ({ ...props }: UIImageInputProps) => {
  const [preview, setPreview] = useState(props.initialPreview);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.files) props.onChangeFile(props.name || '', target.files[0]);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = '';
    props.onChangeFile(props.name || '', null);
  };

  useEffect(() => {
    if (!props.file) return;
    const nextPreview = URL.createObjectURL(props.file);
    setPreview(nextPreview);

    return () => {
      setPreview(props.initialPreview);
      URL.revokeObjectURL(nextPreview);
    };
  }, [props.file, props.initialPreview]);

  return (
    <>
      <div
        className={clsx(
          styles['wrapper-btn-input-image-file'],
          props.className
        )}
      >
        {/* 추가 버튼 */}
        <label
          htmlFor="input-image-file"
          className={styles['card-input-image-file']}
        >
          <div className={styles['wrapper-content-btn-input-image-file']}>
            <Image
              src={IconUnion}
              className={styles['icon-union-input-image-file']}
              alt="이미지 등록 버튼"
            />
            <div className={styles['text-btn-input-image-file']}>
              이미지 등록
            </div>
          </div>
        </label>
        <input
          className={styles['input-image-file']}
          type="file"
          id="input-image-file"
          name="imgFile"
          onChange={handleChange}
          ref={inputRef}
        />
        {/* 미리보기 이미지 */}
        {props.file && (
          <>
            <div className={styles['card-input-image-file']}>
              <UIImage
                src={preview}
                className={styles['img-preview-input-image-file']}
                alt="상품 미리보기"
                isRound={false}
              />
            </div>
            <button
              className={styles['btn-delete-input-image-file']}
              onClick={handleClearClick}
            >
              <Image
                src={IconX}
                className={styles['icon-delete-input-image-file']}
                alt="선택 해제 버튼"
              />
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default UIImageInput;
