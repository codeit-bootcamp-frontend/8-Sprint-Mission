import { ChangeEvent, useEffect, useRef, useState } from "react";
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

type Props = {
  value: Blob | MediaSource;
  name: string;
  onChange: (name: string, file: File | null) => void;
};

function ItemFileInput({ value, name, onChange }: Props) {
  const [preview, setPreview] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const nextFile = e.target.files[0];
      onChange(name, nextFile);
    }
  };

  const onCancel = () => {
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview("");
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <Flex flex="column" content="start" item="start" gap="10">
      <Label htmlFor="image-file">상품 이미지</Label>
      <Flex wrap="wrap" gap="24">
        <FileLabel htmlFor="image-file">
          <img width="48" height="48" src={PlusIcon} alt="file input button" />
          <p>이미지 등록</p>
        </FileLabel>
        {preview && (
          <FileWrap>
            <FileImage src={preview} alt="preview" />
            <Cancel
              onClick={() => onCancel()}
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
