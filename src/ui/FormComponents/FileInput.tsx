import { MouseEvent, ChangeEvent, useState, useEffect, useRef } from "react";
import { FileInputProps } from "../@types/Input";
import { imageUpload } from "../../utils/http";
import styles from "./FileInput.module.css";

export default function FileInput({
  id,
  name,
  previewImg,
  changeValue,
  value,
  className,
  ...props
}: FileInputProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef(null);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const imgValue = e.target.files?.[0] || null;
    if (imgValue) {
      console.log(imgValue);
      try {
        const response = await imageUpload(imgValue);
        console.log(response);
        setFile(imgValue);
      } catch (error) {
        console.log(error);
      }
    }

    changeValue(name, imgValue);
  };

  const handleRemoveImage = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    fileInputRef.current.value = null;
    setFile((prev) => (prev = null));
    changeValue(name, null);
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

  return (
    <div className={styles.previewImgContainer}>
      <label htmlFor={id} className={styles.fileLabel}>
        <span>이미지 등록</span>
      </label>
      <input
        className={styles.fileInput}
        ref={fileInputRef}
        id={id}
        {...props}
        onChange={handleChange}
        accept="image/png, image/jpeg"
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
