import { MouseEvent, ChangeEvent, useState, useEffect } from 'react';
import { FileInputProps } from './types/InputType';
import styles from './FileInput.module.css';

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const imgValue = e.target.files?.[0] || null;
    setFile(imgValue);
    changeValue(name, imgValue);
  };

  const handleRemoveImage = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();

    setFile(prev => (prev = null));
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
        <span>이미지</span>
      </label>
      <input
        className={styles.fileInput}
        id={id}
        {...props}
        onChange={handleChange}
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
