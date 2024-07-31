import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import plusIcon from "../../images/icon_plus.svg";

const StyledLabel = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

const StyledPreviewImg = styled.img`
  width: 282px;
  height: 282px;
  border-radius: 12px;

  &:hover {
    outline: 2px solid var(--blue-100);
  }
`;

const StyledFileInputBox = styled.div`
  width: 282px;
  height: 282px;
  border-radius: 12px;
  background-color: var(--gray-100);
  position: relative;
  background-image: url(${plusIcon});
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 40%;

  &:hover {
    outline: 2px solid var(--blue-100);
  }
`;

const StyledFileInputPlaceholder = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 55%;
  color: var(--gray-400);
  font-size: 16px;
  font-weight: 400;
`;

const StyledFileInput = styled.input`
  width: 282px;
  height: 282px;
  border-radius: 12px;
  background-color: var(--gray-100);
  opacity: 0;
  position: absolute;
  cursor: pointer;
`;

const StyledCancelButton = styled.button`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: var(--gray-400);
  color: var(--gray-50);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: var(--blue-100);
  }
`;

const StyledFileArea = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`;

const StyledImgArea = styled.div`
  position: relative;
  display: inline-block;
`;

function FlieInput({ name, value, onChange }) {
  const [preview, setPreview] = useState();
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
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

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview();
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <div>
      <StyledLabel htmlFor="fileinput">상품 이미지</StyledLabel>
      <StyledFileArea>
        <StyledFileInputBox>
          <StyledFileInput
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
          <StyledPreviewImg src={preview} alt="이미지 미리보기" />
        </StyledImgArea>
      </StyledFileArea>
    </div>
  );
}

export default FlieInput;
