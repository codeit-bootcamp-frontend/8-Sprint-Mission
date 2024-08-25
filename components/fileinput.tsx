import { useEffect, useRef, useState } from "react";
import { ChangeEvent } from "react";
import styled from "styled-components";
import Image from "next/image";
import plusIcon from "@/images/ic_plus.svg";
import { FileInputType } from "@/interfaces/article";
import { postImage } from "@/pages/util/api";

function FileInput({ value, fileChange, previewChange }: FileInputType) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.files ? e.target.files[0] : null;
    fileChange(nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;

    if (!inputNode) return;

    inputNode.value = "";

    setPreview(null);
    fileChange(null);
  };

  useEffect(() => {
    if (!value) return;

    const nextpreview = URL.createObjectURL(value);

    setPreview(nextpreview);
    previewChange(nextpreview);
    // console.log(nextpreview);

    // 메모리 누수를 방지하기 위해 URL 객체를 해제
    return () => {
      if (nextpreview) {
        URL.revokeObjectURL(nextpreview);
      }
    };
  }, [value]);

  const handleWrapperClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <Container>
      <FileInputWrapper onClick={handleWrapperClick}>
        <input
          id="fileInput"
          className="fileInput"
          type="file"
          ref={inputRef}
          onChange={handleChange}
          style={{ display: "none" }}
        />
        <FileInputButton htmlFor="fileInput">
          <Image src={plusIcon} alt="imagePlus" />
          <span className="fileInputCustom">이미지 등록</span>
        </FileInputButton>
      </FileInputWrapper>
      {preview && (
        <ImagePreviewWrapper>
          <Image src={preview} alt="이미지 미리보기" width={282} height={282} />
          <button
            type="button"
            className="imgRemoveButton"
            onClick={handleClearClick}
          >
            x
          </button>
        </ImagePreviewWrapper>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 15px;
`;

const FileInputWrapper = styled.div`
  width: 282px;
  height: 282px;
  border-radius: 12px;
  background-color: #f3f4f6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: #9ca3af;
`;

const FileInputButton = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const ImagePreviewWrapper = styled.div`
  width: 282px;
  height: 282px;
  border-radius: 12px;
`;

export default FileInput;
