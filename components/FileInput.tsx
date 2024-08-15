import { useState, useRef, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import styles from "./FileInput.module.css";

interface FileInputProps {
  name: string;
  value: File | null;
  onChange: (name: string, file: File | null) => void;
}

function FileInput({ name, value, onChange }: FileInputProps) {
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
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

    const nextPreviewImg = URL.createObjectURL(value);
    setPreviewImg(nextPreviewImg);
    setShowPreview(true);

    return () => {
      setPreviewImg(null);
      URL.revokeObjectURL(nextPreviewImg);
      setShowPreview(false);
    };
  }, [value]);

  return (
    <div className={styles.fileWrapper}>
      <div
        className={styles.file}
        onClick={handleButtonClick}
        style={{ cursor: "pointer" }}
      >
        <Image
          className={styles.plusIcon}
          src="/ic_plus.png"
          alt="파일 업로드"
          width={48}
          height={48}
        />
        <p className={styles.iconTitle}>이미지 등록</p>
        <input
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
          ref={inputRef}
          accept="image/png, image/jpeg"
        />
      </div>
      <div>
        {showPreview ? (
          <img
            className={styles.preview}
            src={previewImg ?? ""}
            alt="미리보기 이미지"
            width={282}
            height={282}
          />
        ) : null}
        {value && (
          <button className={styles.button} onClick={handleClearClick}>
            <Image
              className={styles.XIcon}
              src="/ic_X.png"
              alt="버튼 이미지"
              width={22}
              height={24}
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default FileInput;
