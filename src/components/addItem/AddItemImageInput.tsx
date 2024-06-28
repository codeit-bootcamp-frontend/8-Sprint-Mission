import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

import PlusIcon from "core/assets/icons/plusIcon/plus.svg";
import BlueX from "core/assets/icons/xIcon/blue_X.svg";

const ImageInputWrap = styled.section`
  display: flex;
  gap: 24px;
`;

const ImageInputBtn = styled.button`
  width: 282px;
  height: 282px;
  border: none;
  border-radius: 12px;
  background-color: #f3f4f6;
  cursor: pointer;
`;

const ImageAddBtnIcon = styled.img`
  width: 48px;
  height: 48px;
`;

const ImageAddBtnIconTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #9ca3af;
`;

const ImageInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

const PreviewWrap = styled.div`
  position: relative;
  width: 282px;
  height: 282px;
  border-radius: 12px;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 12px;
`;

const PreviewDeleteBtn = styled.button`
  background: inherit;
  border: none;
  padding: 0;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

interface AddItemImageInputProps {
  name: string;
  value: File[] | null;
  onChange: (name: string, value: File[] | null) => void;
}

const AddItemImageInput = ({
  name,
  value,
  onChange,
}: AddItemImageInputProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = (e.target as HTMLInputElement).files![0];
    onChange(name, [nextValue]);
  };

  const handleClearPreview = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.value = "";
    setPreview(null);
  };

  useEffect(() => {
    if (!value || value.length <= 0) return;
    const nextPreview = URL.createObjectURL(value[0]);
    setPreview(nextPreview);
    return () => {
      setPreview(null);
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <ImageInputWrap>
      <ImageInputBtn type="button" onClick={handleClick}>
        <ImageAddBtnIcon src={PlusIcon} alt="이미지 추가 아이콘" />
        <ImageAddBtnIconTitle>이미지 등록</ImageAddBtnIconTitle>
      </ImageInputBtn>

      <ImageInput
        type="file"
        ref={inputRef}
        onChange={handleChange}
        accept="image/png, image/jpg, image/jpeg"
      />
      {preview && (
        <PreviewWrap>
          <PreviewImage src={preview ?? undefined} alt="이미지 미리보기" />
          <PreviewDeleteBtn onClick={handleClearPreview}>
            <img src={BlueX} alt="이미지 삭제 버튼" />
          </PreviewDeleteBtn>
        </PreviewWrap>
      )}
    </ImageInputWrap>
  );
};

export default AddItemImageInput;
