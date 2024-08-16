import styles from './UIImageInput.module.scss';

import clsx from 'clsx';
import { BasicType } from '@type/BasicTypes';
import { useEffect, useRef, useState } from 'react';
import imgDefault from '@assets/images/image/img_default.png';
import { OptionalPick } from '@lib/utils/OptionalPick';

type UIImageInputProps = OptionalPick<
  BasicType,
  'className' | 'initialPreview' | 'file' | 'name',
  'onChangeFile'
>;

const UIImageInput = ({ ...props }: UIImageInputProps) => {
  const [preview, setPreview] = useState(props.initialPreview);
  const inputRef = useRef();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue: File = e.target.files[0];
    props.onChangeFile(props.name || '', nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = '';
    props.onChangeFile(name, null);
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview(initialPreview);
      URL.revokeObjectURL(nextPreview);
    };
  }, [value, initialPreview]);

  return (
    <>
      <div className={`wrapper-btn-input-image-file ${className}`}>
        {/* 추가 버튼 */}
        <label htmlFor="input-image-file" className="card-input-image-file">
          <div className="wrapper-content-btn-input-image-file">
            <IconUnion
              className="icon-union-input-image-file"
              alt="이미지 등록 버튼"
            />
            <div className="text-btn-input-image-file">이미지 등록</div>
          </div>
        </label>
        <input
          className="input-image-file"
          type="file"
          id="input-image-file"
          name="imgFile"
          onChange={handleChange}
          ref={inputRef}
        />
        {/* 미리보기 이미지 */}
        {value && (
          <>
            <div className="card-input-image-file">
              <img
                src={preview || imgDefault}
                className="img-preview-input-image-file"
                alt="상품 미리보기"
              />
            </div>
            <button
              className="btn-deelete-input-image-file"
              onClick={handleClearClick}
            >
              <IconX
                className="icon-delete-input-image-file"
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
