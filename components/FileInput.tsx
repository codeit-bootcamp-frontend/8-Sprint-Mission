import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  StyledLabel,
  StyledPreviewImg,
  StyledFileInputBox,
  StyledFileInputPlaceholder,
  StyledFileInput,
  StyledCancelButton,
  StyledFileArea,
  StyledImgArea,
} from "./FileInput.styled";

interface Props {
  name: string;
  value: string | File | null;
  onChange: (name: string, value: string | File | null) => void;
}

function FileInput({ name, value, onChange }: Props) {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.files?.[0] || null;
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.value = "";
    onChange(name, null);
  };
  useEffect(() => {
    if (!value) return;

    const nextPreview: string = URL.createObjectURL(value as File);
    setPreview(nextPreview);

    return () => {
      setPreview(null);
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <div>
      <StyledLabel>이미지</StyledLabel>
      <StyledFileArea>
        <StyledFileInputBox>
          <label htmlFor="imgFile" />
          <StyledFileInput
            id="imgFile"
            name="imgFile"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleChange}
            ref={inputRef}
          />
          <StyledFileInputPlaceholder>이미지 등록</StyledFileInputPlaceholder>
        </StyledFileInputBox>
        <StyledImgArea>
          {value ? (
            <StyledCancelButton onClick={handleClearClick}>
              X
            </StyledCancelButton>
          ) : null}
          {preview && <StyledPreviewImg src={preview} alt="이미지 미리보기" />}
        </StyledImgArea>
      </StyledFileArea>
    </div>
  );
}

export default FileInput;
