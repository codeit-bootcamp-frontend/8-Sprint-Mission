import { useEffect, useRef, useState } from 'react';
// import { ReactComponent as IconUnion } from '../../../../assets/images/icons/ic_union.svg';
// import { ReactComponent as IconX } from '../../../../assets/images/icons/ic_X.svg';
import ImgDeafault from '../../../../assets/images/market/img_default.png';
import './ImageFileInput.css';

interface ImageFileInputProps {
  className?: string;
  name: string;
  value: Blob | MediaSource;
  initialPreview: string;
  onChange: any;
}

function ImageFileInput({
  className = '',
  name,
  value,
  initialPreview,
  onChange,
}: ImageFileInputProps) {
  const [preview, setPreview] = useState(initialPreview);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.files?.[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = '';
    onChange(name, null);
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
    <div className={`wrapper-btn-input-image-file ${className}`}>
      {/* 추가 버튼 */}
      <label htmlFor="input-image-file" className="card-input-image-file">
        <div className="wrapper-content-btn-input-image-file">
          {/* <IconUnion
            className="icon-union-input-image-file"
            alt="이미지 등록 버튼"
          /> */}
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
              src={preview || ImgDeafault}
              className="img-preview-input-image-file"
              alt="상품 미리보기"
            />
          </div>
          <button
            className="btn-delete-input-image-file"
            onClick={handleClearClick}
          >
            {/* <IconX
              className="icon-delete-input-image-file"
              alt="선택 해제 버튼"
            /> */}
          </button>
        </>
      )}
    </div>
  );
}
export default ImageFileInput;
