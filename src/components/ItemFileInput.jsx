import React, { useEffect, useRef, useState } from "react";
import { Flex } from "../styles/styled";
import {
  FileImage,
  FileInput,
  FileLabel,
  FileWrap,
  Label,
} from "../styles/styled/Additem";
import PlusIcon from "../assets/ic_plus@3x.png";
import CancelBlueLogo from "../assets/ic_blue_X@3x.png";
import styled from "styled-components";

const Cancel = styled.img`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 22px;
  height: 24px;
  cursor: pointer;
  @media (max-width: 1199px) {
    top: 12px;
    right: 12px;
  }
`;

function ItemFileInput({ value, name, onChange }) {
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();

  const handleChange = (e) => {
    const nextFile = e.target.files[0];
    onChange(name, nextFile);
  };

  const onCancel = (value) => {
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
    <Flex flex="column" content="start" item="start" gap="10">
      <Label htmlFor="image-file">상품 이미지</Label>
      <Flex wrap="wrap" gap="24">
        <FileLabel htmlFor="image-file" cursor="pointer">
          <img width="48" height="48" src={PlusIcon} alt="file input button" />
          <p>이미지 등록</p>
        </FileLabel>
        {preview && (
          <FileWrap>
            <FileImage src={preview} alt="preview" />
            <Cancel
              onClick={() => onCancel(value)}
              src={CancelBlueLogo}
              alt="cancel"
            />
          </FileWrap>
        )}
        <FileInput
          display="none"
          ref={fileInputRef}
          id="image-file"
          name="imageFile"
          type="file"
          onChange={handleChange}
        />
      </Flex>
    </Flex>
  );
}

export default ItemFileInput;
