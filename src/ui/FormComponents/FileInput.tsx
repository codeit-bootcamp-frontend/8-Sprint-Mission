import { MouseEvent, ChangeEvent, useState, useEffect, useRef } from "react";
import { FileInputProps } from "../@types/Input";
import { imageUpload } from "../../utils/http";
import ErrorComponent from "../../components/Error/ErrorComponent";
import styles from "./FileInput.module.css";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export default function FileInput({
  id,
  name,
  previewImg,
  changeValue,
  className,
  ...props
}: FileInputProps) {
  const [preview, setPreview] = useState<string | null>(previewImg ?? null);
  const [file, setFile] = useState<File | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const fileInputRef = useRef(null);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const imgValue = e.target.files?.[0];
    if (imgValue) {
      setFile(imgValue);
      if (imgValue.size > MAX_FILE_SIZE) {
        setIsError(true);
        setMessage("업로드 파일 최대 크기는 5MB입니다.");
        return;
      }
      try {
        const response = await imageUpload(imgValue);
        changeValue(name, response.url);
      } catch (error) {
        setIsError(true);
        throw new Error("예기치 않은 오류가 발생했습니다.");
      }
    }
  };

  const handleRemoveImage = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    fileInputRef.current.value = null;
    setFile((prev) => (prev = null));
    setPreview(null);
    changeValue(name, "");
  };

  useEffect(() => {
    if (!file) return;
    const nextPreviewImg = URL.createObjectURL(file);
    setPreview(nextPreviewImg);
    return () => {
      setPreview(null);
      URL.revokeObjectURL(nextPreviewImg);
    };
  }, [file]);

  const handleResetIsError = () => {
    setIsError(false);
  };

  return (
    <div className={styles.previewImgContainer}>
      {isError && (
        <ErrorComponent
          isOpen={isError}
          onResetError={handleResetIsError}
          message={message}
        />
      )}
      <label htmlFor={id} className={styles.fileLabel}>
        <span>이미지 등록</span>
      </label>
      <input
        className={styles.fileInput}
        ref={fileInputRef}
        id={id}
        {...props}
        onChange={handleChange}
        accept="image/png, image/jpeg, image/gif"
      />
      {preview && (
        <div className={styles.previewImg}>
          <img src={preview} alt="이미지 미리보기" />
          <button className={styles.imgRemoveBtn} onClick={handleRemoveImage} />
        </div>
      )}
    </div>
  );
}
